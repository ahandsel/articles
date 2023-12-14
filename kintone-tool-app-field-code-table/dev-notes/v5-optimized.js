javascript: (() => {
  function markdownTableFormatter() {
    let cells = [];
    let columnWidths = [];
    let outputTable = "";

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

        outputTable = "| " + cells[0].join(" | ") + " |\n";

        outputTable += "|-" + cells[1].join("-|-") + "-|\n";

        for (let row_i = 2, row_l = cells.length; row_i < row_l; row_i++) {
          outputTable += "| " + cells[row_i].join(" | ") + " |\n";
        }

        return outputTable;
      }
    };
  }

  function subTableCodeTable(subTableJson, subTableRows) {
    const subTableLabel = subTableJson.label;
    const subFieldsJson = subTableJson.fields;
    console.log(subFieldsJson);
    for (const field in subFieldsJson) {
      const subFieldJson = subFieldsJson[field];
      const subType = subFieldJson.type;
      const subLabel = subFieldJson.label;
      const subCode = subFieldJson.code;
      subTableRows.push(`| ${subTableLabel}'s ${subLabel} | ${subCode} | ${subType}|`);
    }
    subTableRows.sort();
    return subTableRows;
  };
  function fieldCodeTable(rawProperties) {
    const header = `| Field Name | Code | Type |\n| ---------- | ---------- | --------------- |`;
    const rows = [];
    for (const field in rawProperties) {
      const fieldJson = rawProperties[field];
      const type = fieldJson.type;
      const label = fieldJson.label;
      const code = fieldJson.code;
      if (fieldJson.hasOwnProperty('enabled') && fieldJson.enabled === false) { }
      else if (fieldJson.hasOwnProperty('lookup')) {
        rows.push(`| ${label} | ${code} | Lookup - ${type}|`);
      }
      else if (type === `SUBTABLE`) {
        rows.push(`| ${label} | ${code} | ${type} |`);
        subTableCodeTable(fieldJson, rows);
      }
      else {
        rows.push(`| ${label} | ${code} | ${type} |`);
      }
    }
    rows.sort();
    const rawTable = [header, ...rows].join('\n');
    let formatter = markdownTableFormatter();
    const formattedTable = formatter.formatTable(rawTable);
    console.log(formattedTable);
    navigator.clipboard.writeText(formattedTable);
  }

  const body = { 'app': kintone.app.getId() };

  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function (resp) {
    console.log(resp.properties);
    fieldCodeTable(resp.properties);
  }, function (error) {
    console.log(error);
  });
})();
