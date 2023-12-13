# Converting Numbers to Words in a Kintone App Using JavaScript

No more manually typing out the textual representation of a number!


## TL;DR

[kintone-numbers-to-words.js](https://github.com/ahandsel/articles/blob/master/kintone-numbers-to-words/kintone-numbers-to-words.js) is a [Kintone JavaScript customization](https://kintone.dev/en/what-is-kintone-customize/) that automatically converts a number entered in a field to its textual representation (i.e., converts `123` to `"one hundred twenty-three"`).

Following is a quick demo of the number to textual representation live conversion:
* ![GIF showing how typing 100 in the input field results in "one hundred" in the output field](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uth9z1vj6f53dzjhxom.gif)


## Table of Content

* [What is Kintone?](#what-is-kintone)
* [Quick Overview of the Kintone JavaScript Customization](#quick-overview-of-the-kintone-javascript-customization)
* [Installation](#installation)
  * [Prep a Kintone App](#prep-a-kintone-app)
  * [Edit the Script](#edit-the-script)
  * [Add the Script](#add-the-script)
* [Usage](#usage)
* [kintone-numbers-to-words.js](#kintone-numbers-to-wordsjs)
* [Code Breakdown](#code-breakdown)
  * [Script Structure](#script-structure)
  * [Configuration](#configuration)
  * [Helper Functions](#helper-functions)
  * [Main Function](#main-function)
  * [Event Registration](#event-registration)
* [Test Cases](#test-cases)
* [Got Questions? Need Help?](#got-questions-need-help)


## What is Kintone?

Kintone is a no-code/low-code application platform that provides an easy way to build business applications tailored to your organization's unique needs. Store your vital metrics in a Kintone Web Database!

One powerful feature is its support for JavaScript customizations, enabling you to extend app functionality (just like this "Numbers to Words" function).

Learn more about Kintone at [kintone.com](https://www.kintone.com/en-us/).

Check out the Kintone developer resources at [kintone.dev](https://kintone.dev/en/).

---


## Quick Overview of the Kintone JavaScript Customization

The kintone-numbers-to-words.js JavaScript code is meant to be attached to a Kintone App with a [Number field](https://get.kintone.help/k/en/id/040534.html) or [Text field](https://get.kintone.help/k/en/id/040539.html).

The script automatically converts a numerical value from the input field (`INPUT_FIELD_CODE`) into its corresponding word form (e.g., `123` to `one hundred twenty-three`) and populates the output field (`OUTPUT_FIELD_CODE`) with the result.

There are several helper functions (`singleDigitToWords`, `doubleDigitToWords`, and `tripleDigitToWords`) to convert numbers of varying lengths to words. The main function, `numberToWords`, combines the textual representation of the entire number, even accounting for thousands, millions, and beyond.

Kintone Event handlers trigger the script when the input field is edited, leading to live number-to-word conversion on the Kintone Edit Record view.

There is an option to include commas, dashes, and 'and's between the words for better readability.

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
* `ADD_ADDS`: Set to `true` to add 'and' before the last word
* `ADD_DASHES`: Set to `true` to add dashes between two-digit numbers


### Add the Script

1. Navigate to the Kintone App
1. Click the **App Settings** button ⚙️ at the upper right corner
1. Select the **App Settings** tab
1. Navigate to **Customization and Integration** and select the **JavaScript and CSS Customization** option
1. Click the **Upload File** button and upload the edited `kintone-numbers-to-words.js` file

---


## Usage

1. Navigate to the Kintone App
1. Click the **Add Record** button ➕
1. Enter a number in the input field

The output field will be automatically populated with the number in its word form.

Remember to save the record!

---


## kintone-numbers-to-words.js

```javascript
// Kintone JS Customization to convert a number to words
(function () {
  'use strict';

  // Constants for field codes
  const NUMBER_FIELD_CODE = 'Number';
  const TEXT_FIELD_CODE = 'Text';
  const ADD_COMMAS = true; // set to true to add commas
  const ADD_ADDS = true; // set to true to add 'and' before the last number
  const ADD_DASHES = true; // set to true to add dashes between two-digit numbers

  // Convert a single-digit number to its word form
  function singleDigitToWords(num) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return words[num];
  }

  // Convert a two-digit number to its word form
  function doubleDigitToWords(num, addDashes) {
    const tenToNineteen = [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const multiplesOfTen = [
      'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (num < 20) return tenToNineteen[num - 10];
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    return multiplesOfTen[tens - 2] + (ones ? (addDashes ? '-' : ' ') + singleDigitToWords(ones) : '');
  }

  // Convert a three-digit number to its word form
  function tripleDigitToWords(num, addDashes) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    let words = '';
    if (hundreds) words += singleDigitToWords(hundreds) + ' hundred ';
    if (remainder) {
      words += remainder < 10 ? singleDigitToWords(remainder) : doubleDigitToWords(remainder, addDashes);
    }
    return words.trim();
  }

  // Capitalize the first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Main function to convert a number to words with optional parameters
  function numberToWords(inputValue, addCommas, addAdds, addDashes) {

    // check if the input is a number
    const cleanNumber = String(inputValue).replace(/[^0-9]/g, '');

    if (!cleanNumber) {
      alert('Please enter a valid number');
      return;
    }

    // check if the input is a positive number
    let isNegative = false;
    if (inputValue < 0) {
      isNegative = true;
    }

    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
    let wordRepresentation = [];
    let cleanNumberCopy = cleanNumber;
    let scaleIndex = 0;

    while (cleanNumberCopy.length) {
      const piece = cleanNumberCopy.slice(-3);
      const pieceAsWords = tripleDigitToWords(parseInt(piece, 10), addDashes);
      if (pieceAsWords) {
        wordRepresentation.unshift(pieceAsWords + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : ''));
      }

      cleanNumberCopy = cleanNumberCopy.slice(0, -3);
      scaleIndex++;
    }

    let finalOutput = addCommas ? wordRepresentation.join(', ') : wordRepresentation.join(' ');

    if (addAdds && wordRepresentation.length > 1) {
      // Split the finalOutput into words, add 'and' before the last word, then join them back.
      let finalOutputArray = finalOutput.split(' ');
      finalOutputArray.splice(-1, 0, 'and');
      finalOutput = finalOutputArray.join(' ');
    }

    if (isNegative) {
      finalOutput = 'Negative ' + finalOutput;
    }

    if (!isNegative) {
      // Capitalize the first letter of finalOutput
      finalOutput = capitalizeFirstLetter(finalOutput);
    }

    return finalOutput;
  }

  // Register events
  const events = [
    `app.record.create.change.${NUMBER_FIELD_CODE}`,
    `app.record.edit.change.${NUMBER_FIELD_CODE}`
  ];

  kintone.events.on(events, function (event) {
    const record = event.record;
    const inputNumber = record[NUMBER_FIELD_CODE].value;
    record[TEXT_FIELD_CODE].value = numberToWords(inputNumber, ADD_COMMAS, ADD_ADDS, ADD_DASHES);
    return event;
  });

}());
```

---


## Code Breakdown

Let us take a look at how this script works.


### Script Structure

The entire script is wrapped in an [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) to avoid polluting the global namespace.

```javascript
(function () {
  'use strict';
  // Code here
}());
```


### Configuration

These five constants store values that are specific to the Kintone App and how the user wants the script to behave.  
It is a common practice for Kintone JavaScript customizations to store these values in constants at the top of the script for easy access and modification.

```javascript
const NUMBER_FIELD_CODE = 'Number';
const TEXT_FIELD_CODE = 'Text';
const ADD_COMMAS = true; // set to true to add commas
const ADD_ADDS = true; // set to true to add 'and' before the last number
const ADD_DASHES = true; // set to true to add dashes between two-digit numbers
```


### Helper Functions

We define some helper functions to keep the code DRY (Don't Repeat Yourself):

* `singleDigitToWords(num)`: Converts a single-digit number to its word form.
* `doubleDigitToWords(num)`: Converts a two-digit number to its word form.
* `tripleDigitToWords(num)`: Converts a three-digit number to its word form.


### Main Function

This function does the heavy lifting. It takes a number and converts it to its word form, considering thousands, millions, billions, etc.

```javascript
  function numberToWords(inputValue, addCommas, addAdds, addDashes) {
  // Implementation
}
```


### Event Registration

Finally, we register the Kintone events that will trigger our code. In this example, we are using `app.record.create.change.${NUMBER_FIELD_CODE}` and `app.record.edit.change.${NUMBER_FIELD_CODE}` to handle both new record creation and record editing events.

```javascript
kintone.events.on(events, function (event) {
  // Event Handling
});
```

---


## Test Cases

Here are a few test cases that I used to verify the script's performance:

| Input (Number) | Output (Word / Textual Representation)                                                             |
| -------------- | -------------------------------------------------------------------------------------------------- |
| 4729538016     | `Four billion, seven hundred twenty-nine million, five hundred thirty-eight thousand, and sixteen` |
| 9214703150     | `Nine billion, two hundred fourteen million, seven hundred three thousand, one hundred and fifty`  |
| 638237465      | `Six hundred thirty-eight million, two hundred thirty-seven thousand, four hundred and sixty-five` |
| 857921         | `Eight hundred fifty-seven thousand, nine hundred and twenty-one`                                  |
| 523            | `Five hundred twenty-three`                                                                        |
| 42             | `Forty-two`                                                                                        |
| 7              | `Seven`                                                                                            |

---

That is it ~  
Now you can convert numbers to words automatically in your Kintone app using this JavaScript customization.


## Got Questions? Need Help?

Make a post on the [Kintone Developer Forum](https://forum.kintone.dev/) and tag me (`@genji`) in your post!
