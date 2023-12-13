# App Field Code Table Project


## Outline <!-- omit in toc -->

* [Status](#status)
* [Objective](#objective)


## Status

* v1 - Testing Kintone API
* v2 - Basic Markdown table output
* v3 - Filter out disabled fields
* v4 - Sort by field name


## Objective

Overall: Create a Markdown table of the App's fields and their codes

Core Requirements:
* [x] Extract the field code, name, and type - Level1-apiOnly.js
* [x] Create a Markdown table - Level2-basic.js
* [x] Filter out disabled fields - Level3-filterOutDisabled.js


Additional Requirements:
* [ ] sort the table by field name
* [ ] Test for disabled fields
* [ ] Test for field group
* [ ] Test for table
* [ ] test for lookup
* [ ] test for related records
* [ ] test for blank space

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
