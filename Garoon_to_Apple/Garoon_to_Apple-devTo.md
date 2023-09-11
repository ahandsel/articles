# Import a Garoon Event to Apple Calendar Bookmarklet

## Usage

Initial Setup
1. Copy the below `Garoon_to_Apple_Bookmarklet.js` code block
1. Go to Bookmark manager (`chrome://bookmarks/`) > Click on the `⋮` at the top-right-corner
1. Click `Add new bookmark` & paste the code in the URL field

Importing a Garoon Event to Apple Calendar
1. Go to the Garoon event's page
1. Click on the Bookmark
1. Open the downloaded `ical` file
1. Confirm that the imported event in Apple Calendar App

## Not working? 🤔
* Open browser console
  * Mac: `Command+Option+C`
  * Windows, Linux, Chrome OS: `Control+Shift+C`
* Check if you are getting an error message

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

## API - Calndr
[calndr.link](https://calndr.link/) is a free calendar link generator created by [atymic](https://atymic.dev/)!

My bookmarklet uses Calndr's [dynamic API](https://calndr.link/api-docs#dynamic).

If you like Calndr, please consider [buying atymic a coffee](https://ko-fi.com/slashdev)!

## References
* [Api Docs - Calndr](https://calndr.link/api-docs#dynamic)
* [スケジュールオブジェクト - cybozu developer network](https://cybozu.dev/ja/garoon/docs/overview/schedule-object/)
* [Garoon_to_Apple_Bookmarklet_v0.js - GitHub](https://github.com/ahandsel/articles/blob/master/Garoon_to_Apple/Garoon_to_Apple_Bookmarklet_v0.js)
