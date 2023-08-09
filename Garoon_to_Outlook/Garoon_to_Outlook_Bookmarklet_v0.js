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
