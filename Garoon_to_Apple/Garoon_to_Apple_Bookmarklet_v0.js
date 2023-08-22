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
