javascript: (() => {
  const formatTimestamp = (dateString) =>
    new Date(dateString).toISOString().replaceAll(/[-:]|\.\d+/g, "");
  const addCalendar = (event) => {
    console.log({ event });
    const params = new URLSearchParams({ action: "TEMPLATE" });

    params.set("text", event.subject);

    const start = formatTimestamp(event.start.dateTime);
    const end = formatTimestamp(event.end.dateTime);
    params.set("dates", `${start}/${end}`);

    const origin = location.origin.replace(".s.", ".");
    const url = `${origin}${location.pathname}?event=${event.id}`;

    params.set("details", url);

    open(`https://www.google.com/calendar/render?${params.toString()}`);
  };

  const event = window.garoon?.schedule?.event?.get();

  if (event === undefined) {
    alert(
      "Error: Not on a Garoon schedule.\nPlease open a specific Garoon event."
    );
    return;
  }

  addCalendar(event);
})();
