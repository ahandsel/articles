javascript: (() => {
  function markdownTableFormatter() {
    let cells = [];
    let columnWidths = [];
    let formattedMarkdownTable = "";

    function addMissingCellColumns() {
      for (let row_i = 0, row_l = cells.length; row_i < row_l; row_i++) {
        for (let col_i = 0, col_l = columnWidths.length; col_i < col_l; col_i++) {
          if (typeof cells[row_i][col_i] === 'undefined') {
            cells[row_i][col_i] = '';
          }
        }
      }
    }

    function getColumnWidths() {
      columnWidths = [];

      for (let row_i = 0, row_l = cells.length; row_i < row_l; row_i++) {
        for (let col_i = 0, col_l = cells[row_i].length; col_i < col_l; col_i++) {
          if (typeof columnWidths[col_i] === 'undefined') {
            columnWidths[col_i] = cells[row_i][col_i].length;
          } else if (columnWidths[col_i] < cells[row_i][col_i].length) {
            columnWidths[col_i] = cells[row_i][col_i].length;
          }
        }
      }
    }

    function importTable(table) {
      let tableRows = table.split("\n");

      while (tableRows[0].indexOf('|') === -1) {
        tableRows.shift();
      }

      for (let row_i = 0, row_l = tableRows.length; row_i < row_l; row_i++) {
        if (tableRows[row_i].indexOf('|') === -1) {
          continue;
        }

        cells[row_i] = [];
        let rowColumns = tableRows[row_i].split(/(?<!\\)\|/g);

        for (let col_i = 0, col_l = rowColumns.length; col_i < col_l; col_i++) {
          let cell = rowColumns[col_i].trim();
          if (row_i === 1) {
            cell = cell.replace(/-+/g, "-");
          }
          cells[row_i][col_i] = cell;
        }
      }

      getColumnWidths();

      trimCells();
    }

    function padCellsForOutput() {
      for (let row_i = 0, row_l = cells.length; row_i < row_l; row_i++) {
        for (let col_i = 0, col_l = cells[row_i].length; col_i < col_l; col_i++) {
          let paddingChar = row_i === 1 ? '-' : ' ';
          while (cells[row_i][col_i].length < columnWidths[col_i]) {
            cells[row_i][col_i] += paddingChar;
          }
        }
      }
    }

    function trimCells() {
      if (columnWidths[0] === 0) {
        cells.forEach(row => row.shift());
      }

      getColumnWidths();

      if (columnWidths[columnWidths.length - 1] === 0) {
        cells.forEach(row => {
          if (row.length === columnWidths.length) {
            row.pop();
          }
        });
      }

      getColumnWidths();
    }

    return {
      formatTable: function (table) {
        importTable(table);
        addMissingCellColumns();
        padCellsForOutput();

        formattedMarkdownTable = "| " + cells[0].join(" | ") + " |\n";

        formattedMarkdownTable += "|-" + cells[1].join("-|-") + "-|\n";

        for (let row_i = 2, row_l = cells.length; row_i < row_l; row_i++) {
          formattedMarkdownTable += "| " + cells[row_i].join(" | ") + " |\n";
        }

        return formattedMarkdownTable;
      }
    };
  }

  function subTablesTable(rawSubTable, subTableRows) {
    const subTableLabel = rawSubTable.label;
    const subFieldsObj = rawSubTable.fields;
    for (const field in subFieldsObj) {
      const subFieldObj = subFieldsObj[field];
      const subType = subFieldObj.type;
      const subLabel = subFieldObj.label;
      const subCode = subFieldObj.code;
      subTableRows.push(`| ${subTableLabel}'s ${subLabel} | ${subCode} | ${subType}| SubTable |`);
    }
    subTableRows.sort();
    return subTableRows;
  };

  function mainFieldTable(rawProperties) {
    const rows = [];
    for (const field in rawProperties) {
      const mainFieldObj = rawProperties[field];
      const type = mainFieldObj.type;
      const label = mainFieldObj.label;
      const code = mainFieldObj.code;
      if (mainFieldObj.enabled === false) { }
      else if (mainFieldObj.hasOwnProperty('lookup')) {
        rows.push(`| ${label} | ${code} | ${type} | Lookup |`);
      }
      else if (type === `SUBTABLE`) {
        rows.push(`| ${label} | ${code} | ${type} | SubTable |`);
        subTablesTable(mainFieldObj, rows);
      }
      else {
        rows.push(`| ${label} | ${code} | ${type} |`);
      }
    }
    rows.sort();
    return rows;
  }

  function extractSpacerElementIds(inputArray) {
    let blankSpaceElementIds = [];
    let rawFieldsArray = inputArray.reduce((acc, obj) => {
      if (obj.fields && Array.isArray(obj.fields)) {
        return acc.concat(obj.fields);
      }
      return acc;
    }, []);
    rawFieldsArray.forEach(field => {
      if (field.type === "SPACER" && field.elementId) {
        blankSpaceElementIds.push(`| Blank Space | ${field.elementId} | SPACER | elementId |`);
      }
    });
    return blankSpaceElementIds;
  }

  function main() {
    const appID = { 'app': kintone.app.getId() };
    const mdHeader = `| Field Name | Code | Type | Note | \n| - | - | - | - |`;
    kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', appID, function (resp) {
      const rawFields = resp.properties;
      const rawMainFieldTableRows = mainFieldTable(rawFields);
      kintone.api(kintone.api.url('/k/v1/app/form/layout', true), 'GET', appID, function (resp) {
        const getBlankSpaceRows = extractSpacerElementIds(resp.layout);
        const rows = rawMainFieldTableRows.concat(getBlankSpaceRows);
        rows.sort();
        const rawTable = [mdHeader, ...rows].join('\n');
        let formatter = markdownTableFormatter();
        const formattedTable = formatter.formatTable(rawTable);
        console.log(formattedTable);
        navigator.clipboard.writeText(formattedTable);
      }, function (error) {
        console.error(error);
      });
    }, function (error) {
      console.error(error);
    });
  }
  main();
})();
