# Add a Button to Show & Hide the Kintone App's Header

Here is a script to add a `Hide Header` button in the space element below the header. The button is a toggle to show and hide the Kintone App's header.

## Demo

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rlnjlg2g9klcshs1rr22.gif)

## Code

```javascript
// Add a button to show & hide the Kintone header
// If this code breaks, verify if `gaia-argoui-app-index-toolbar` is still the correct class name for the header
(function () {
  'use strict';
  // Run a function when the record list page appears
  kintone.events.on('app.record.index.show', function (event) {
    // Prevent duplication of the button
    if (document.getElementById('toggle_button') != null) {
      return;
    }
    // Set a button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle_button';
    toggleButton.innerHTML = 'Hide Header';
    toggleButton.style.margin = '10px';
    toggleButton.style.padding = '10px 10px';
    toggleButton.style.ariaLabel = 'Header Display Toggle';
    toggleButton.style.height = '48px';
    toggleButton.style.border = '1px solid #e3e7e8';
    toggleButton.style.backgroundColor = '#f7f9fa';

    // Button onclick function
    toggleButton.onclick = function () {
      headerToggle();
    };

    // Retrieve the header menu space element and set the button there
    kintone.app.getHeaderSpaceElement().appendChild(toggleButton);
    // const record = event.record;
    function headerToggle() {
      let header = document.getElementsByClassName('gaia-argoui-app-index-toolbar')[0];
      if (header.style.display === "none") {
        header.style.display = "block";
        console.log('Showing the header');
        toggleButton.innerHTML = 'Hide Header';
      } else {
        header.style.display = "none";
        console.log('Hiding the header');
        toggleButton.innerHTML = 'Show Header';
      }
    }
  });

})();
```

## Debugging
If this code breaks, verify if `gaia-argoui-app-index-toolbar` is still the correct class name for the Kintone App's header.
