# Import a Garoon Event to Outlook Calendar Bookmarklet

## Usage

Initial Setup
1. Copy the below `Garoon_to_Outlook_Bookmarklet_v0.js` code block
1. Go to Bookmark manager (`chrome://bookmarks/`) > Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field

Importing a Garoon Event to Outlook Calendar
1. Go to the Garoon event's page
1. Click on the Bookmark
1. Confirm the imported event in Outlook Calendar & click `Save`

## Using Outlook Live or Office 365?

Outlook Live and Office 365 uses a different domain so please change the URL accorringly

Outlook Live:
* URL: `https://outlook.live.com/calendar/deeplink/compose`
* Code: ```open(`https://outlook.live.com/calendar/deeplink/compose?path=/calendar/action/compose&${params.toString()}`);```

Office 365:
* URL: `https://outlook.office.com/calendar/deeplink/compose`
* Code: ```open(`https://outlook.office.com/calendar/deeplink/compose?path=/calendar/action/compose&${params.toString()}`);```

## Not working? 🤔
* Open browser console
  * Mac: `Command+Option+C`
  * Windows, Linux, Chrome OS: `Control+Shift+C`
* Check if you are getting an error message

## Garoon_to_Outlook_Bookmarklet_v0.js

```javascript
javascript: (() => {
  const formatTimestamp = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const year = inputDate.getUTCFullYear();
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getUTCDate()).padStart(2, '0');
    const hours = String(inputDate.getUTCHours()).padStart(2, '0');
    const minutes = String(inputDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(inputDate.getUTCSeconds()).padStart(2, '0');
    const outputDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    return outputDateString;
  };
  const bodyFormat = (inputText) => inputText.replace(/\n/g, '<br>');
  const addCalendar = (event) => {
    console.log({ event });
    const start = formatTimestamp(event.start.dateTime);
    const end = formatTimestamp(event.end.dateTime);
    const origin = location.origin.replace(".s.", ".");
    const url = `${origin}${location.pathname}?event=${event.id}`;
    const params = new URLSearchParams({ rru: "addevent" });
    const body = bodyFormat(event.notes);
    params.set("startdt", start);
    params.set("enddt", end);
    params.set("subject", event.subject);
    params.set("body", body);
    params.set("location", url);
    open(`https://outlook.office.com/calendar/deeplink/compose?path=/calendar/action/compose&${params.toString()}`);
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

## References
* [Outlook live - add-event-to-calendar-docs](https://interactiondesignfoundation.github.io/add-event-to-calendar-docs/services/outlook-web.html)
* [スケジュールオブジェクト - cybozu developer network](https://cybozu.dev/ja/garoon/docs/overview/schedule-object/)
