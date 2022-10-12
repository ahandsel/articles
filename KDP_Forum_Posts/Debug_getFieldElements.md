## Getting a Cannot read properties of null (reading 'length')` error when using `kintone.app.getFieldElements()`?

### What is the `kintone.app.getFieldElements()`?

[`kintone.app.getFieldElements()`](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-field-elements) is Kintone's JavaScript API that allows you to retrieves a specified field element of fields in the record list as an array.

#### Function

`kintone.app.getFieldElements(fieldCode)`

#### Parameters

Swap `fieldCode` with the field code of the field you want to retrieve.

#### Response

Either an array of field elements or `null` will return.

`null` is returned when:

* Current page is not a [Record List view](https://get.kintone.help/k/en/id/040614.html#view_whatsview_2010).

* Current Record List view does not have the specified field.

An empty array will be returned if there are no records.

### Uncaught TypeError: Cannot read properties of null (reading 'length') error

The `Cannot read properties of null (reading 'length')` error is a JavaScript error that occurs when you try to access a property of a `null` value.

To resolve this error, you must check if the value is `null` before accessing its properties.

### `Cannot read properties of null (reading 'length')` error when using `kintone.app.getFieldElements()`

Since `kintone.app.getFieldElements()` returns `null` in several scenarios (listed in **Response** section), include a check to verify that you are getting an array before proceeding.

Possible causes for the `Cannot read properties of null (reading 'length')` error are:

1. The specified field code is incorrect.

1. The current page is not a Record List view.

1. The current page does not include the specified field.