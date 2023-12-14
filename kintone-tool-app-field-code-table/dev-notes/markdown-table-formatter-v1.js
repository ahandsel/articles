// Converted JS class to functions
function markdownTableFormatter() {
  // Private instance variables
  let cells = [];
  let columnWidths = [];
  let outputTable = "";

  // Helper Functions
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

    // Remove leading empty lines
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

    // Remove leading and trailing rows if they are empty
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
    // Trim leading and trailing empty cells
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

  // Public API
  return {
    formatTable: function(table) {
      importTable(table);
      addMissingCellColumns();
      padCellsForOutput();

      // Header
      outputTable = "| " + cells[0].join(" | ") + " |\n";

      // Separator
      outputTable += "|-" + cells[1].join("-|-") + "-|\n";

      for (let row_i = 2, row_l = cells.length; row_i < row_l; row_i++) {
        outputTable += "| " + cells[row_i].join(" | ") + " |\n";
      }

      return outputTable;
    }
  };
}
