# Export a Garoon Event to Apple Calendar Bookmarklet

Copying and pasting event details from Garoon to Apple Calendar is tedious. This bookmarklet makes it easy to generate an iCal file from any open Garoon event.

* 🇯🇵 日本語版: [ガルーン イベントを Apple カレンダーにエクスポートするブックマークレット](https://qiita.com/ahandsel/items/18308ff3a6daad9029a4)


## Table of Content <!-- omit in toc -->

* [Usage](#usage)
  * [Initial Setup](#initial-setup)
  * [Export a Garoon Event to Apple Calendar](#export-a-garoon-event-to-apple-calendar)
* [Not working? 🤔](#not-working-)
* [Garoon\_to\_Apple\_Bookmarklet.js](#garoon_to_apple_bookmarkletjs)
* [What is a Bookmarklet?](#what-is-a-bookmarklet)
* [Code Breakdown](#code-breakdown)
  * [Wrap the Code in an IIFE](#wrap-the-code-in-an-iife)
  * [Get the Garoon Event Object](#get-the-garoon-event-object)
  * [Verify the Input](#verify-the-input)
  * [Main Function - addCalendar](#main-function---addcalendar)
  * [Formatting the Start and End Times](#formatting-the-start-and-end-times)
  * [Modifying the Origin URL](#modifying-the-origin-url)
  * [Constructing Event URL](#constructing-event-url)
  * [Initializing URL Parameters](#initializing-url-parameters)
  * [Formatting Event Notes](#formatting-event-notes)
  * [Setting URL Parameters](#setting-url-parameters)
  * [Handling All-Day Events](#handling-all-day-events)
  * [Create \& Open the Calendar Event URL](#create--open-the-calendar-event-url)
  * [Logging for Debugging](#logging-for-debugging)
* [Like the Bookmarklet?](#like-the-bookmarklet)
* [References](#references)


## Usage


### Initial Setup

1. Copy the below `Garoon_to_Apple_Bookmarklet.js` code block
1. Enter `@bookmarks` in the Chrome's address bar
1. Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field


### Export a Garoon Event to Apple Calendar

1. Go to the Garoon event's page
1. Click on the bookmarklet
1. Download the generated iCal file
1. Open the file and confirm that the event is now in the Apple Calendar App


## Not working? 🤔

1. Open the browser console
    * Mac: `Command+Option+C`
    * Windows, Linux, Chrome OS: `Control+Shift+C`
2. Check if you are getting an error message


## Garoon_to_Apple_Bookmarklet.js

```javascript
javascript: (() => {
  const formatTimestamp = (dateString) =>
    new Date(dateString).toISOString().replaceAll(/[-:]|\.\d+/g, '');
  const bodyFormat = (inputText) => inputText.replace(/\n/g, '\r');
  const addCalendar = (event) => {
    console.log({ event });
    const start = formatTimestamp(event.start.dateTime);
    const end = formatTimestamp(event.end.dateTime);
    const origin = location.origin.replace(".s.", ".");
    const url = `${origin}${location.pathname}?event=${event.id}`;
    const params = new URLSearchParams({ service: "apple" });
    const body = bodyFormat(event.notes);
    params.set("start", start);
    params.set("end", end);
    params.set("title", event.subject);
    params.set("description", body);
    params.set("location", url);
    params.set("timezone", event.start.timeZone);
    params.set("calname", `${start}-${event.id}`);
    if (event.isAllDay) { params.set("all_day", "true"); }
    console.log(params.toString());
    open(`https://calndr.link/d/event/?${params.toString()}`);
  };

  const event = window.garoon?.schedule?.event?.get();

  if (event === undefined) {
    alert(
      `Error: Not on a Garoon schedule.\nPlease open a specific Garoon event.`
    );
    return;
  }

  addCalendar(event);
})();
```


## What is a Bookmarklet?

A bookmarklet is a small piece of JavaScript code that can be stored as a bookmark in a web browser.

When you click on it, the code runs on the current web page, making extending the browser's functionality easy.


## Code Breakdown

Let's dive into the code and see how it works.


### Wrap the Code in an IIFE

First, JavaScript must be specified as the language of the code.

Then, since bookmarklets are executed in the global scope, it is a good practice to wrap the code in an [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) to avoid polluting the global scope.

```javascript
javascript: (() => {
  // ... (code snippet)
  addCalendar(event);
})();
```


### Get the Garoon Event Object

Using the [`garoon.schedule.event.get()`](https://cybozu.dev/ja/garoon/docs/js-api/schedule/get-schedule-event/) JavaScript API, get the event object of the open Garoon event.

The [`window` web API](https://developer.mozilla.org/en-US/docs/Web/API/Window) makes accessing the `garoon` object from the global scope possible.

```javascript
const event = window.garoon?.schedule?.event?.get();
```


### Verify the Input

Before continuing, we should verify that the `event` object is not `undefined` (i.e., the open page is a Garoon event page).

```javascript
const event = window.garoon?.schedule?.event?.get();

if (event === undefined) {
  alert(`Error: Not on a Garoon schedule.\nPlease open a specific Garoon event.`);
  return;
}
```


### Main Function - addCalendar

The function takes an `event` object as an argument and performs several operations to prepare a URL. This URL, when opened, will automatically populate the fields for a new event in Apple Calendar.


### Formatting the Start and End Times

Call the `formatTimestamp` helper function to convert the event's start and end date-time strings into the required format.

```javascript
const start = formatTimestamp(event.start.dateTime);
const end = formatTimestamp(event.end.dateTime);
```

The function `formatTimestamp` takes the date string and formats it to ISO 8601, stripping away hyphens and colons.

```javascript
const formatTimestamp = (dateString) =>
  new Date(dateString).toISOString().replaceAll(/[-:]|\.\d+/g, '');
```


### Modifying the Origin URL

Since the [Client Certificate Authentication](https://jp.cybozu.help/general/en/id/02047.html#list_access_secureaccess_10) feature modifies the URL by adding a `.s` between the subdomain and the domain, let's remove it before exporting.

```javascript
const origin = location.origin.replace(".s.", ".");
```


### Constructing Event URL

Generate a clean, short URL for the event by combining the origin URL and the event ID.

```javascript
const url = `${origin}${location.pathname}?event=${event.id}`;
```


### Initializing URL Parameters

Initialize a `URLSearchParams` object and set the service as "apple".

```javascript
const params = new URLSearchParams({ service: "apple" });
```


### Formatting Event Notes

Call the `bodyFormat` helper function to convert the event notes into a specific format.

```javascript
const body = bodyFormat(event.notes);
```

The function takes the string and replaces all newlines with carriage returns.

```javascript
const bodyFormat = (inputText) => inputText.replace(/\n/g, '\r');
```


### Setting URL Parameters

Populate the parameters needed for the Apple Calendar event.

```javascript
params.set("start", start);
params.set("end", end);
params.set("title", event.subject);
params.set("description", body);
params.set("location", url);
params.set("timezone", event.start.timeZone);
params.set("calname", `${start}-${event.id}`);
```


### Handling All-Day Events

If the event is all-day, add an `all_day` parameter with a `true` value.

```javascript
if (event.isAllDay) { params.set("all_day", "true"); }
```


### Create & Open the Calendar Event URL

[calndr.link](https://calndr.link/) is a free calendar link generator created by [atymic](https://atymic.dev/)!

Pass the parameters to Calndr's [dynamic API](https://calndr.link/api-docs#dynamic) and download the iCal file.

```javascript
open(`https://calndr.link/d/event/?${params.toString()}`);
```


### Logging for Debugging

To help with debugging, log the `event` object and the `params` object to the console so the input and output of the script are visible to users.

```javascript
console.log({ event });
// ...
console.log(params.toString());
```

---

That is about it ~  
Simple script, right? I hope you found it useful ~


## Like the Bookmarklet?

Consider [buying atymic a coffee](https://ko-fi.com/slashdev) for creating [calndr.link](https://calndr.link/)


## References

* [Calndr's API Doc](https://calndr.link/api-docs#dynamic)
* [スケジュールオブジェクト - cybozu developer network](https://cybozu.dev/ja/garoon/docs/overview/schedule-object/)
* [Garoon_to_Apple_Bookmarklet_v0.js - GitHub](https://github.com/ahandsel/articles/blob/master/Garoon_to_Apple/Garoon_to_Apple_Bookmarklet_v0.js)
