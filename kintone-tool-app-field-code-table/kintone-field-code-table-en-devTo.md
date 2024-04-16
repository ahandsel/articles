# Kintone Customization Debugging Tool - Field Code Table

Ever get frustrated debugging a Kintone customization because you cannot remember the field codes for the app?
I made a bookmarklet to generate a markdown table of field codes for a Kintone App.

This article covers the installation, usage, and how the bookmarklet works.


## TL;DR

[kintone-tool-app-field-code-table.js](https://github.com/ahandsel/articles/tree/main/kintone-tool-app-field-code-table/kintone-tool-app-field-code-table.js) is a bookmarklet that outputs a markdown table with the field name, field code, and field type for all fields in a Kintone App.

Here is a quick demo of the bookmarklet in action:  
![kintone-field-code-table-demo.gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x77z81izndqvwrdod06l.gif)


## Table of Contents

* [TL;DR](#tldr)
* [Initial Setup - Add the Bookmarklet](#initial-setup---add-the-bookmarklet)
* [Usage - Generate a Field Code Table](#usage---generate-a-field-code-table)
* [Code - kintone-tool-app-field-code-table.js](#code---kintone-tool-app-field-code-tablejs)
* [Code Breakdown](#code-breakdown)
  * [Quick Note - What is a Bookmarklet?](#quick-note---what-is-a-bookmarklet)
  * [Overall Structure of the Bookmarklet](#overall-structure-of-the-bookmarklet)
  * [`main` Function](#main-function)
    * [Why call both APIs?](#why-call-both-apis)
  * [`mainFieldTable` Function \& `subTablesTable` Helper Function](#mainfieldtable-function--subtablestable-helper-function)
  * [`extractSpacerElementIds` Function](#extractspacerelementids-function)
  * [`markdownTableFormatter` Helper Function](#markdowntableformatter-helper-function)
* [Conclusion](#conclusion)


## Initial Setup - Add the Bookmarklet

1. Copy the below `kintone-tool-app-field-code-table.js` code block
1. Enter `@bookmarks` in Chrome address bar
1. Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field


## Usage - Generate a Field Code Table

1. Navigate to the Kintone App
1. (Optional) Open the Chrome DevTools console
1. Click the bookmarklet
1. The markdown table will be copied to the clipboard and displayed in the Chrome DevTools console

If the bookmarklet is not working, check the console for error messages.
* Mac: `Command+Option+C`
* Windows, Linux, Chrome OS: `Control+Shift+C`


## Code - kintone-tool-app-field-code-table.js

```javascript
javascript: (() => {
  const markdownTableFormatter = () => {
    let cells = [];
    let columnWidths = [];
    let formattedMarkdownTable = "";

    const addMissingCellColumns = () => {
      cells.forEach((row, row_i) => {
        columnWidths.forEach((_, col_i) => {
          if (!cells[row_i][col_i]) {
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
    return Object.entries(rawProperties).flatMap(([field, mainFieldObj]) => {
      const { type, label, code } = mainFieldObj;

      if (mainFieldObj.enabled === false) {
        return [];
      } else if (mainFieldObj.hasOwnProperty('lookup')) {
        return [`| ${label} | ${code} | ${type} | Lookup |`];
      } else if (type === `SUBTABLE`) {
        const rows = [`| ${label} | ${code} | ${type} | SubTable |`];
        subTablesTable(mainFieldObj, rows);
        return rows;
      } else {
        return [`| ${label} | ${code} | ${type} |`];
      }
    });
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
    kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', appID, resp => {
      const rawFields = resp.properties;
      const rawMainFieldTableRows = mainFieldTable(rawFields);
      kintone.api(kintone.api.url('/k/v1/app/form/layout', true), 'GET', appID, resp => {
        const getBlankSpaceRows = extractSpacerElementIds(resp.layout);
        const rows = rawMainFieldTableRows.concat(getBlankSpaceRows).sort();
        const rawTable = `${mdHeader}\n${rows.join('\n')}`;
        const formatter = markdownTableFormatter();
        const formattedTable = formatter.formatTable(rawTable);
        console.log(formattedTable);
        navigator.clipboard.writeText(formattedTable);
      }, error => console.error(error));
    }, error => console.error(error));
  };
  main();
})();
```

---


## Code Breakdown


### Quick Note - What is a Bookmarklet?

A bookmarklet is a small piece of JavaScript code that can be stored as a bookmark in a web browser. When you click on it, the code runs on the current web page, making extending the browser's functionality easy.

It is a great way to build simple tools for Kintone without creating a full-blown Kintone customization. No need to upload it to the Kintone App, just save it to your browser as a bookmark. There are limitations to what you can do with a bookmarklet, such as no comments or using external libraries, but it is a great way to get started with Kintone customization.


### Overall Structure of the Bookmarklet

Since this is a bookmarklet, the code is wrapped in a self-invoking anonymous function, encapsulated in `javascript: (() => {...})();`. This pattern ensures that the code runs immediately when the bookmark is clicked and its scope does not interfere with the current page's environment.

The core of the bookmarklet revolves around the `main` function, which handles the API calls to Kintone. The `main` function is called at the end of the bookmarklet, ensuring that it runs when the bookmarklet is clicked.

Then we have three functions that handle the data processing: `mainFieldTable`, `subTablesTable`, and `extractSpacerElementIds`. These functions are called by the `main` function to process the data returned by the Kintone API calls.

Lastly, we have the `markdownTableFormatter` helper function, which handles the formatting of the raw markdown table generated by the `main` function. You can copy the function for your own markdown table formatting needs.


### `main` Function

The `main` function acts as the entry point of the bookmarklet. It retrieves the Kintone App's ID and then makes two API calls using `kintone.api`. First, it uses [Get Form Fields](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-fields/) API to get the list of fields and field settings of the Kintone App. Then it uses [Get Form Layout](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-layout/) API to get the field layout info of a form in the Kintone App. The responses from these calls are processed to generate the Markdown table, which is then output to the console and copied to the clipboard.


#### Why call both APIs?

The [Get Form Fields](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-fields/) API response is nearly all the information we need. It gets everything except for [Space field](https://get.kintone.help/k/en/id/040515.html)s! Since Blank Space fields are not technically a data-input field, they are not included in the Get Form Fields API response. The [Get Form Layout](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-layout/) API, on the other hand, does not include the field's labels (field name). It provides the field types and field codes. However, missing the field's label makes it difficult to identify the field. Thus, we need to call both APIs to get all the information we need to generate the Markdown table. The Get Form Fields API response is used to get the field's label, field type, and field code, while the Get Form Layout API response is used to get the Blank Space fields' element ID.


### `mainFieldTable` Function & `subTablesTable` Helper Function

The `mainFieldTable` function uses the Get Form Fields API response to the fields' labels, types, and codes. First, it filters out disabled fields. For [Lookup field](https://get.kintone.help/k/en/id/040526.html)s, `Lookup` is added in the notes column since the field type is set to the field it is looking up from. For [Table field](https://get.kintone.help/k/en/id/040529.html)s, the function calls the `subTablesTable` helper function to iterate through all the subtable's fields. `SubTable` is added in the notes column to identify which fields are in a sub-table, and the sub-table's label is added to the field name column. This way, the table is sorted so fields in the same sub-table are grouped together. Finally, all the rows are sorted alphabetically by the field name and returned as an array of strings.


### `extractSpacerElementIds` Function

The `extractSpacerElementIds` function extracts the element IDs of `SPACER` type objects from the the Get Form Layout API response. Initially, the function defines an empty array, `blankSpaceElementIds`, which is intended to store the extracted IDs. Then, a `reduce` operation is employed on the `inputArray`. This operation iteratively processes each object in the array. During each iteration, if an object contains a `fields` property that is also an array, the contents of this `fields` array are concatenated to an accumulator `acc`. This process effectively flattens any nested arrays of fields into a single array, `rawFieldsArray`.

The next step involves iterating over each field in `rawFieldsArray` using the `forEach` method. Within this loop, the function checks each field to determine if its `type` is `"SPACER"` and if it possesses a non-null `elementId`. When both conditions are met, a table row with the `elementId` is pushed into the `blankSpaceElementIds` array. The table row will include "Blank Space" as the field name, `elementId` as the field code, "SPACER" as the field type, and lastly, "elementId" is noted. After processing all fields, the function returns the `blankSpaceElementIds` array.


### `markdownTableFormatter` Helper Function

The `markdownTableFormatter` helper function handles the formatting of the raw markdown table generated by the `main` function. It is primarily based on [alanwsmith](https://github.com/alanwsmith/)'s [markdown_table_formatter](https://github.com/alanwsmith/markdown_table_formatter) project. I mainly refactored it so it can be used as a bookmarklet. The function takes in a raw table string, splits it into rows and cells, and formats it into a Markdown table. Having the tables equally spaced and aligned makes it easier to glance at them and find the field code you want.

The `addMissingCellColumns`, `getColumnWidths`, `importTable`, `padCellsForOutput`, and `trimCells` helper functions are all inner functions of `markdownTableFormatter`. They are used to format the raw table data into Markdown syntax. The `addMissingCellColumns` function adds empty cells to rows that are missing columns. The `getColumnWidths` function calculates the width of each column. The `importTable` function splits the raw table string into rows and cells. The `padCellsForOutput` function adds padding to each cell for output. The `trimCells` function removes empty columns and rows from the table.


## Conclusion

It was surprisingly complicated to gather all the information needed for a helpful reference table. It was pretty straightforward until I realized the Get Form Fields API response did not include the Blank Space field's element ID. However, it was smooth sailing again once I figured out how to extract the element ID from the Get Form Layout API response. I am so glad I found alanwsmith's markdown_table_formatter project. Since this is a bookmarklet, I could not use any external libraries, so coding out the markdown table formatter would have been a pain. Thankfully, I found his project, and it was exactly what I needed. Thank you, alanwsmith!

I hope you found this article useful. If you have any questions or comments, please feel free to comment below or post on the [Kintone Developer Forum](https://forum.kintone.dev/) and tag me (`@genji`)!
