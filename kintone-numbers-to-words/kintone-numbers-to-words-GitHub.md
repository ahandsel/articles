# Converting Numbers to Words in a Kintone App Using JavaScript
No more manually typing out the textual representation of a number!

## TL;DR <!-- omit in toc -->
Here is a [Kintone JavaScript customization](https://kintone.dev/en/what-is-kintone-customize/) that automatically converts a number entered in a field to its textual representation (i.e., converts `123` to `"one hundred twenty-three"`). The script is available below or in [kintone-numbers-to-words-v3.js](./kintone-numbers-to-words-v3.js).

## Table of Content <!-- omit in toc -->
* [What is Kintone?](#what-is-kintone)
* [Quick Overview of the Kintone JavaScript Customization](#quick-overview-of-the-kintone-javascript-customization)
* [Installation](#installation)
  * [Prep a Kintone App](#prep-a-kintone-app)
  * [Edit the Script](#edit-the-script)
  * [Add the Script](#add-the-script)
* [Usage](#usage)
* [Code Breakdown](#code-breakdown)
  * [Script Structure](#script-structure)
  * [Configuration](#configuration)
  * [Helper Functions](#helper-functions)
  * [Main Function](#main-function)
  * [Event Registration](#event-registration)
* [Got Questions? Need Help?](#got-questions-need-help)

## What is Kintone?

Kintone is a no-code/low-code application platform that provides an easy way to build business applications tailored to your organization's unique needs. Store your vital metrics in a Kintone Web Database!

One powerful feature is its support for JavaScript customizations, enabling you to extend app functionality (just like this "Numbers to Words" function).

Learn more about Kintone at [kintone.com](https://www.kintone.com/en-us/).

Check out the Kintone developer resources at [kintone.dev](https://kintone.dev/en/).

---

## Quick Overview of the Kintone JavaScript Customization

This is a JavaScript code that is meant to be attached to a Kintone App with a [Number field](https://get.kintone.help/k/en/id/040534.html) or [Text field](https://get.kintone.help/k/en/id/040539.html).

The script automatically converts numerical value from the input field (`INPUT_FIELD_CODE`) into its corresponding word form (e.g., `123` to `one hundred twenty-three`) and populates the output field (`OUTPUT_FIELD_CODE`) with the result.

There are several several helper functions (`singleDigitToWords`, `doubleDigitToWords`, `tripleDigitToWords`) to convert numbers of varying lengths to words. The main function, `numberToWords`, pieces together the textual representation of the entire number, even accounting for thousands, millions, and beyond.

Kintone Event handlers trigger the script when the input field is changed which leads to live number-to-word conversion on the Kintone Edit Record view.

There is an option to include commas between the words for better readability.

---

## Installation

### Prep a Kintone App

1. Create a new Kintone App or use an existing one
1. Add an input field - either a Number field or a Text field
1. Add an output field - a Text field
1. Note down the field codes for the input and output fields

### Edit the Script

There are three constants that you need to edit in the script:
* `INPUT_FIELD_CODE`: The field code of the input field
* `OUTPUT_FIELD_CODE`: The field code of the output field
* `ADD_COMMAS`: Set to `true` to add commas between the words

### Add the Script

1. Navigate to the Kintone App
1. Click the **App Settings** button ⚙️ at the upper right corner
1. Select the **App Settings** tab
1. Navigate to **Customization and Integration** and select the **JavaScript and CSS Customization** option
1. Click the **Upload File** button and upload the edited [kintone-numbers-to-words-v3.js](./kintone-numbers-to-words-v3.js) file

---

## Usage

1. Navigate to the Kintone App
1. Click the **Add Record** button ➕
1. Enter a number in the input field

The output field will be automatically populated with the number in its word form

Don't forget to save the record!

---

## Code Breakdown

Let's take a look at how this script works.

### Script Structure

The entire script is wrapped in an [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) to avoid polluting the global namespace.

```javascript
(function () {
  'use strict';
  // Code here
}());
```

### Configuration

These three constants store values that is specific to the Kintone App and how the user wants the script to behave.  
It is a common practice for Kintone JavaScript customizations to store these values in constants at the top of the script for easy access and modification.

```javascript
  const INPUT_FIELD_CODE = 'Number'; // the field code of either a number field or a text field
  const OUTPUT_FIELD_CODE = 'Text'; // the field code of a text field
  const ADD_COMMAS = false; // set to true to add commas
```

### Helper Functions

We define some helper functions to keep the code DRY (Don't Repeat Yourself):

* `singleDigitToWords(num)`: Converts a single-digit number to its word form.
* `doubleDigitToWords(num)`: Converts a two-digit number to its word form.
* `tripleDigitToWords(num)`: Converts a three-digit number to its word form.

### Main Function

This function does the heavy lifting. It takes a number and converts it to its word form, considering thousands, millions, billions, etc.

```javascript
function numberToWords(inputValue, addCommas) {
  // Implementation
}
```

### Event Registration

Finally, we register the Kintone events that will trigger our code. In this example, we're using `app.record.create.change.${NUMBER_FIELD_CODE}` and `app.record.edit.change.${NUMBER_FIELD_CODE}` to handle both new record creation and record editing events.

```javascript
kintone.events.on(events, function (event) {
  // Event Handling
});
```

---

That is it ~  
Now you can convert numbers to words automatically in your Kintone app using this JavaScript customization.

## Got Questions? Need Help?

Make a post on the [Kintone Developer Forum](https://forum.kintone.dev/) and tag me (`@genji`) in your post!
