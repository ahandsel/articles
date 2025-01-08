// thanks to https://jsfiddle.net/UselessCode/qm5AG/ as a starting point
(function () {
  document.querySelector("#startDate").valueAsDate = new Date();
  document.querySelector("#endDate").valueAsDate = new Date();
  document.querySelector("#endDate").min = new Date()
    .toISOString()
    .substr(0, 10);
  document.querySelector("#startDate").addEventListener("change", function () {
    var val = this.value;
    document.querySelector("#endDate").min = new Date(val)
      .toISOString()
      .substr(0, 10);
  });
})();
var icsFile = null;
function createFile() {
  var eventDate = {
    start: document.querySelector("#startDate").value,
    end: document.querySelector("#endDate").value
  },
    summary = document.querySelector("#summary").value,
    description = document.querySelector("#description").value;
  var link = document.querySelector("#downloadLink");
  link.href = makeIcsFile(eventDate, summary, description);
  link.classList.remove("hide");
}
function convertDate(date) {
  var event = new Date(date).toISOString();
  event = event.split("T")[0];
  event = event.split("-");
  event = event.join("");
  return event;
}
function makeIcsFile(date, summary, description) {
  var test =
    "BEGIN:VCALENDAR\n" +
    "CALSCALE:GREGORIAN\n" +
    "METHOD:PUBLISH\n" +
    "PRODID:-//Test Cal//EN\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    "UID:test-1\n" +
    "DTSTART;VALUE=DATE:" +
    convertDate(date.start) +
    "\n" +
    "DTEND;VALUE=DATE:" +
    convertDate(date.end) +
    "\n" +
    "SUMMARY:" +
    summary +
    "\n" +
    "DESCRIPTION:" +
    description +
    "\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";

  var data = new File([test], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (icsFile !== null) {
    window.URL.revokeObjectURL(icsFile);
  }

  icsFile = window.URL.createObjectURL(data);

  return icsFile;
}
var create = document.getElementById("create");

create.addEventListener("click", createFile, false);
