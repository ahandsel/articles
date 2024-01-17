# Import a Garoon Event to Google Calendar Bookmarklet


## Usage

Initial Setup
1. Copy the below `Garoon_to_Google_Bookmarklet.js` code block
1. Go to Bookmark manager (`chrome://bookmarks/`) > Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field

Importing a Garoon Event to Google Calendar
1. Go to the Garoon event's page
1. Click on the bookmarklet
1. Confirm the imported event in Google Calendar & click `Save`


## Not working? 🤔

* Open browser console
  * Mac: `Command+Option+C`
  * Windows, Linux, Chrome OS: `Control+Shift+C`
* Check if you are getting an error message


## Garoon_to_Google_Bookmarklet.js

```javascript
javascript: (() => {
  const formatTimestamp = (dateString) =>
    new Date(dateString).toISOString().replaceAll(/[-:]|\.\d+/g, '');
  const bodyFormat = (inputText) => inputText.replace(/\n/g, '<br>');
  const addCalendar = (event) => {
    console.log({ event });
    const start = formatTimestamp(event.start.dateTime);
    const end = formatTimestamp(event.end.dateTime);
    const origin = location.origin.replace('.s.', '.');
    const url = `${origin}${location.pathname}?event=${event.id}`;
    const body = bodyFormat(event.notes);
    const params = new URLSearchParams({ action: 'TEMPLATE' });
    params.set('dates', `${start}/${end}`);
    params.set('text', event.subject);
    params.set('location', url);
    params.set('details', body);
    open(`https://www.google.com/calendar/render?${params.toString()}`);
  };
  const event = window.garoon?.schedule?.event?.get();
  if (event === undefined) {
    alert(
      `Error: Not on a Garoon event.\nPlease open a specific Garoon event.`
    );
    return;
  }
  addCalendar(event);
})();
```


## References

* [Google - add-event-to-calendar-docs](https://interactiondesignfoundation.github.io/add-event-to-calendar-docs/services/google.html)
* [スケジュールオブジェクト - cybozu developer network](https://cybozu.dev/ja/garoon/docs/overview/schedule-object/)
