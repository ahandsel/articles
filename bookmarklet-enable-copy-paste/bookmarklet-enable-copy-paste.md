# Force Enable Copy and Paste on Websites! JavaScript Bookmarklet

I despise websites that disable copy/paste functionality. I understand that forcing users to type in their information manually is one way to make them verify their information is correct, but it's a horrible user experience. Here is the bookmarklet that I use to get around this limitation.

## Table of Content <!-- omit in toc -->
* [forceEnableCopyPaste.js](#forceenablecopypastejs)
* [Usage](#usage)
* [Understanding The Code](#understanding-the-code)
* [Warning and Disclaimer](#warning-and-disclaimer)

---

## forceEnableCopyPaste.js

The bookmarklet is a JavaScript code snippet that disables the website's function that disables copying and pasting. When you activate the bookmarklet, it attaches event listeners that override these restricting functions.

```javascript
javascript: (function () {
  const forceEnableCopyPaste = (e) => {
    e.stopImmediatePropagation();
    return true;
  };

  ['paste', 'copy'].forEach(event => {
    document.addEventListener(event, forceEnableCopyPaste, true);
  });
})();
```

---

## Usage

Initial Setup
1. Copy the `forceEnableCopyPaste.js` code block
1. Go to Bookmark manager (`chrome://bookmarks/`) > Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field

Disabling Copy-Paste Restrictions
1. Go to the website where you want to enable copy-paste
1. Click on the bookmarklet to activate it
1. Enjoy copying & pasting!

---

## Understanding The Code

Let's dissect the code to understand how it works:

```javascript
const forceEnableCopyPaste = (e) => {
  e.stopImmediatePropagation();
  return true;
};
```

The function `forceEnableCopyPaste` is an event handler that takes an event object `e` as its argument. The function stops the immediate propagation of the event by calling `e.stopImmediatePropagation()`. This prevents other listeners from handling the event, negating any website-specific code restricting copy-pasting.

```javascript
['paste', 'copy'].forEach(event => {
  document.addEventListener(event, forceEnableCopyPaste, true);
});
```

Here, an array containing two strings, `'paste'` and `'copy'`, represents the event types. For each event type, `addEventListener` attaches the `forceEnableCopyPaste` event handler to the `document`. The `true` flag signifies that the listener will be invoked during the capture phase, making it harder for website-specific code to stop the event propagation.

---

## Warning and Disclaimer
* ⚠️ Using this bookmarklet on certain websites may break other functionalities, thus rendering the website unusable.
* ⚠️ Using this bookmarklet on certain websites may violate their terms and conditions.
* ⚠️ Always respect the intellectual property rights and terms of service of websites you visit.
