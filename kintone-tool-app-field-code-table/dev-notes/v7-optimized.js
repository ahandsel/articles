javascript: (() => {
  const markdownTableFormatter = () => {
    let cells = [];
    let columnWidths = [];
    let formattedMarkdownTable = "";

    const addMissingCellColumns = () => {
      cells.forEach((row, row_i) => {
        columnWidths.forEach((_, col_i) => {
          if (typeof cells[row_i][col_i] === 'undefined') {
            cells[row_i][col_i] = '';
          }
        });
      });
    };

    const getColumnWidths = () => {
      columnWidths = [];
      cells.forEach((row) => {
        row.forEach((cell, col_i) => {
          const cellLength = cell.length;
          columnWidths[col_i] = Math.max(columnWidths[col_i] || 0, cellLength);
        });
      });
    };

    const importTable = (table) => {
      const tableRows = table.split("\n").filter(row => row.includes('|'));
      cells = tableRows.map((row, row_i) => {
        let rowColumns = row.split(/(?<!\\)\|/g).map(cell => cell.trim());
        if (row_i === 1) {
          rowColumns = rowColumns.map(cell => cell.replace(/-+/g, "-"));
        }
        return rowColumns;
      });
      getColumnWidths();
      trimCells();
    };

    const padCellsForOutput = () => {
      cells.forEach((row, row_i) => {
        row.forEach((cell, col_i) => {
          const paddingChar = row_i === 1 ? '-' : ' ';
          cells[row_i][col_i] = cell.padEnd(columnWidths[col_i], paddingChar);
        });
      });
    };

    const trimCells = () => {
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
    };

    return {
      formatTable: (table) => {
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
  };

  const subTablesTable = (rawSubTable, subTableRows) => {
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

  const mainFieldTable = (rawProperties) => {
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
  };

  const extractSpacerElementIds = (inputArray) => {
    const blankSpaceElementIds = [];
    const rawFieldsArray = inputArray.reduce((acc, obj) => {
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
  };

  const main = () => {
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
  };
  main();
})();
