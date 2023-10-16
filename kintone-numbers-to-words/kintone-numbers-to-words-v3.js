// v3 - Kintone JS Customization to convert a number to words
(function () {
  'use strict';

  // Configuration needed for this script to work
  const INPUT_FIELD_CODE = 'Number'; // the field code of either a number field or a text field
  const OUTPUT_FIELD_CODE = 'Text'; // the field code of a text field
  const ADD_COMMAS = false; // set to true to add commas

  // Convert single-digit number to its word form
  function singleDigitToWords(num) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return words[num];
  }

  // Convert two-digit number to its word form
  function doubleDigitToWords(num) {
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
    return multiplesOfTen[tens - 2] + (ones ? ' ' + singleDigitToWords(ones) : '');
  }

  // Convert a three-digit number to its word form
  function tripleDigitToWords(num) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    let words = '';
    if (hundreds) words += singleDigitToWords(hundreds) + ' hundred ';
    if (remainder) {
      words += remainder < 10 ? singleDigitToWords(remainder) : doubleDigitToWords(remainder);
    }
    return words.trim();
  }

  // Main function - Input value & optional comma separation values
  function numberToWords(inputValue, ADD_COMMAS) {
    const cleanNumber = String(inputValue).replace(/[^0-9]/g, '');

    if (!cleanNumber) {
      alert('Please enter a valid number');
      return;
    }

    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
    let wordRepresentation = [];
    let cleanNumberCopy = cleanNumber;
    let scaleIndex = 0;

    while (cleanNumberCopy.length) {
      const piece = cleanNumberCopy.slice(-3);
      const pieceAsWords = tripleDigitToWords(parseInt(piece, 10));
      if (pieceAsWords) {
        wordRepresentation.unshift(pieceAsWords + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : ''));
      }

      cleanNumberCopy = cleanNumberCopy.slice(0, -3);
      scaleIndex++;
    }

    return ADD_COMMAS ? wordRepresentation.join(', ') : wordRepresentation.join(' ');
  }

  // Register events
  const events = [
    `app.record.create.change.${INPUT_FIELD_CODE}`,
    `app.record.edit.change.${INPUT_FIELD_CODE}`
  ];

  kintone.events.on(events, function (event) {
    const record = event.record;
    const inputNumber = record[INPUT_FIELD_CODE].value;
    record[OUTPUT_FIELD_CODE].value = numberToWords(inputNumber, ADD_COMMAS);
    return event;
  });

}());
