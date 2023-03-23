(function () {
  'use strict';
  // Field codes
  const inputFieldCode = 'input';
  const sizeFieldCode = 'size';
  const outputFieldCode = 'output';
  // Kintone Events
  const QRCodeEvents = ['app.record.detail.show', 'mobile.app.record.detail.show'];

  kintone.events.on(QRCodeEvents, function (event) {
    try {
      const inputValue = event.record[inputFieldCode].value;
      const sizeValue = event.record[sizeFieldCode].value;
      const outputSpace = kintone.app.record.getSpaceElement(outputFieldCode) || kintone.mobile.app.record.getSpaceElement(outputFieldCode);

      // Generate an img element for the QR Code
      const outputImg = document.createElement('img');
      // You can use the source of the image as a GET query that includes the string to be QR coded.
      outputImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${sizeValue}x${sizeValue}&data=${inputValue}`;
      console.log(outputImg.src);

      // Add to space element and display complete
      outputSpace.appendChild(outputImg);
      return event;
    } catch (error) {
      console.warn("Exception KintoneEventsOn Queue", error);
    }

  });
})();