# JS Customization to Generate QR Code from Kintone Record Values


## Overview

This is a quick guide on setting up a Kintone JavaScript customization that generates a QR code from a record value.

The QR code can be generated based on a URL or a text value.

The customization works on both the Kintone desktop and mobile views. (To do this, upload the script under both the `JavaScript/CSS Files for PC` and `JavaScript/CSS Files for Mobile Devices` sections of the Kintone App's [Customize page](https://get.kintone.help/k/en/id/040556.html).)


## Customization

[QR code API](https://goqr.me/api/) by Foundata GmbH is used to generate the QR code with GET requests.

The following Kintone fields are required for the customization:
* [Space field](https://get.kintone.help/k/en/id/040515.html) to display the QR code:
* A field for string input for the QR code content:
  * [Text field](https://get.kintone.help/k/en/id/040539.html)
  * [Text area field](https://get.kintone.help/k/en/id/040538.html)
  * [Link field](https://get.kintone.help/k/en/id/040532.html)
* [Number field](https://get.kintone.help/k/en/id/040534.html) to specify the QR code size:
  * Set the maximum value to `1000`.
  * The value is the number of pixels for the QR code width and height


### QR Code Script

⚠️ **Note**: The following variables must be specified to match the field codes of your Kintone App:
* `inputFieldCode`
* `sizeFieldCode`
* `outputFieldCode`

```javascript
(function () {
  'use strict';
  // Field codes
  const inputFieldCode = 'input';
  const sizeFieldCode = 'size';
  const outputFieldCode = 'output';
  // Kintone Events when the customization will be triggered
  const QRCodeEvents = ['app.record.detail.show', 'mobile.app.record.detail.show'];

  kintone.events.on(QRCodeEvents, function (event) {
    try {
      const inputValue = event.record[inputFieldCode].value;
      const sizeValue = event.record[sizeFieldCode].value;
      const outputSpace = kintone.app.record.getSpaceElement(outputFieldCode) || kintone.mobile.app.record.getSpaceElement(outputFieldCode);

      // Generate an img element for the QR Code
      const outputImg = document.createElement('img');

      // Set the image source as the GET query for the QR Code API
      outputImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${sizeValue}x${sizeValue}&data=${inputValue}`;
      console.log(outputImg.src);

      // Attach the image to the space element
      outputSpace.appendChild(outputImg);
      return event;
    } catch (error) {
      console.warn("Exception KintoneEventsOn Queue", error);
    }
  });
})();
```


## Reference

* [Kintone Developer Program](https://kintone.dev/en/)
* [kintoneのフィールド値からQRコードを生成するプラグイン - Qiita](https://qiita.com/spica/items/6f7eed5efa8cf4f74167)
* [QR code API: command “create-qr-code” (generate QR code, QR code generator)](https://goqr.me/api/doc/create-qr-code/)
