# App Field Code Table Project


## Outline <!-- omit in toc -->

* [Status](#status)
* [Objective](#objective)
* [References](#references)


## Status

* v1 - Testing Kintone API
* v2 - Basic Markdown table output
* v3 - Filter out disabled fields
* v4 - Bookmarklet + Sort by field name + Markdown table formatting
* v5 - SubTable and Lookup supported
* v6 - Switch from [Get Form Fields](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-fields/) to [Get Form Layout](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-layout/) API for blank space
* v7 - Add field group support

## Objective

Overall: Create a Markdown table of the App's fields and their codes

Core Requirements:
* [x] Extract the field code, name, and type - Level1-apiOnly.js
* [x] Create a Markdown table - Level2-basic.js
* [x] Filter out disabled fields - Level3-filterOutDisabled.js

Additional Requirements:
* [x] sort the table by field name
* [x] Test for disabled fields
* [ ] Test for field group - failed
* [x] Test for table
* [x] test for lookup
* [x] test for related records
* [ ] test for blank space - failed

Nice to have:
* [ ] Support options output for
  * [ ] Radio button
  * [ ] check box
  * [ ] drop-down
  * [ ] multi-choice
* [ ] Use better values for field type
  * [ ] `CALC`: Calculated
  * [ ] `CATEGORY`: Category
  * [ ] `CHECK_BOX`: Check box
  * [ ] `CREATED_TIME`: Created datetime
  * [ ] `CREATOR`: Created by
  * [ ] `DATE`: Date
  * [ ] `DATETIME`: Date and time
  * [ ] `DROP_DOWN`: Drop-down
  * [ ] `FILE`: Attachment
  * [ ] `LINK`: Link
  * [ ] `MODIFIER`: Updated by
  * [ ] `MULTI_LINE_TEXT`: Text Area
  * [ ] `MULTI_SELECT`: Multi-choice
  * [ ] `NUMBER`: Number, or Look-up*
  * [ ] `RADIO_BUTTON`: Radio button
  * [ ] `RECORD_NUMBER`: Record number
  * [ ] `REFERENCE_TABLE`: Related Records
  * [ ] `RICH_TEXT`: Rich text
  * [ ] `SINGLE_LINE_TEXT`: Text, or Look-up*
  * [ ] `STATUS`: Process management status
  * [ ] `STATUS_ASSIGNEE`: Assignee of the Process Management status
  * [ ] `SUBTABLE`: Table
  * [ ] `TIME`: Time
  * [ ] `UPDATED_TIME`: Updated datetime
  * [ ] `USER_SELECT`: User selection


## References

* Markdown table formatting = [alanwsmith/markdown\_table\_formatter: A javascript form to format markdown tables for easier reading.](https://github.com/alanwsmith/markdown_table_formatter)
