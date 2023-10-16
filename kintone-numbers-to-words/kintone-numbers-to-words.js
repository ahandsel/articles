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

    // check if input is a number
    const cleanNumber = String(inputValue).replace(/[^0-9]/g, '');

    if (!cleanNumber) {
      alert('Please enter a valid number');
      return;
    }

    // check if input is a positive number
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