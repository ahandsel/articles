javascript: (() => {
  // Markdown Table Formatter Module
  const markdownTableFormatter = (() => {
    let cells = [];
    let columnWidths = [];

    const addMissingCellColumns = () => cells.forEach(row => {
      while (row.length < columnWidths.length) row.push('');
    });

    const getColumnWidths = () => {
      columnWidths = cells.map(row => row.map(cell => cell.length))
                          .reduce((acc, widths) => widths.map((w, i) => Math.max(w, acc[i] || 0)), []);
    };

    const importTable = (table) => {
      cells = table.split("\n").filter(row => row.includes('|'))
                   .map(row => row.split(/(?<!\\)\|/g).map(cell => cell.trim()));
      getColumnWidths();
      trimCells();
    };

    const padCellsForOutput = () => cells.forEach((row, rowIndex) => {
      const paddingChar = rowIndex === 1 ? '-' : ' ';
      row.forEach((cell, colIndex) => {
        while (cell.length < columnWidths[colIndex]) cell += paddingChar;
      });
    });

    const trimCells = () => {
      if (columnWidths[0] === 0) cells.forEach(row => row.shift());
      getColumnWidths();
      if (columnWidths.at(-1) === 0) cells.forEach(row => row.pop());
      getColumnWidths();
    };

    return {
      formatTable: (table) => {
        importTable(table);
        addMissingCellColumns();
        padCellsForOutput();

        let outputTable = "| " + cells[0].join(" | ") + " |\n";
        outputTable += "|-" + cells[1].join("-|-") + "-|\n";
        cells.slice(2).forEach(row => {
          outputTable += "| " + row.join(" | ") + " |\n";
        });
        return outputTable;
      }
    };
  })();

  // Kintone API Call and Table Generation
  const body = { 'app': kintone.app.getId() };

  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, (resp) => {
    try {
      const mdTable = generateFieldCodeTable(resp.properties);
      console.log(mdTable);
      navigator.clipboard.writeText(mdTable);
    } catch (error) {
      console.error('Error generating table:', error);
    }
  }, error => console.error('Kintone API error:', error));

  const generateFieldCodeTable = (rawProperties) => {
    const header = `| Field Name | Code | Type |\n| ---------- | ---------- | --------------- |`;
    const rows = Object.values(rawProperties)
                      .filter(field => field.enabled !== false)
                      .map(({ label, code, type }) => `| ${label} | ${code} | ${type} |`);
    
    rows.sort();
    const mdTable = [header, ...rows].join('\n');
    return markdownTableFormatter.formatTable(mdTable);
  };
})();
