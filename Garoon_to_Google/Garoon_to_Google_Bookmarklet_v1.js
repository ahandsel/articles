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
