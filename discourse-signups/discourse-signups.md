# Discourse Monthly New Sign-ups

Here is my note on how to get the number of new sign-ups for a discourse forum.


## Background

As a developer advocate, I oversee our developer forum that is hosted using [Discourse](https://www.discourse.org/) platform.

For a monthly metric report, I need to determine how many new sign-ups we have for the prior month.

Surprisingly, it is tedious to get this number.


## Bookmarklet Method

I created a bookmarklet that will generate the URL to the Discourse Admin Report with the correct parameters.

📝 Make sure to update the `discourseDomain` variable with your Discourse domain.

```javascript
javascript: (function () {
  const discourseDomain = 'forum.kintone.dev';
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const todayDate = new Date();
  const firstDayPrevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() - 1, 1);
  const lastDayPrevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
  const startDate = formatDate(firstDayPrevMonth);
  const endDate = formatDate(lastDayPrevMonth);
  const url = `https://${discourseDomain}/admin/reports/signups?end_date=${endDate}&mode=table&start_date=${startDate}`;
  console.log(url);
  window.open(url, '_blank');
})();
```


## Zapier Method

Here is the Zapier workflow I created to get a monthly Slack post with the sign-up count.


### 1. Every Month in Schedule by Zapier

* App: `Schedule by Zapier`
* Event: `Every Month`
* Step details
  * Day of the Month: `1`
  * Time of Day: `Noon`


### 2. Change Date Format to YYYY-MM-DD (for Schedule by Zapier's "Pretty Date" field)

* App: `Formatter by Zapier`
* Event: `Date / Time`
* Step details
  * Transform: `Format`
  * Input: `1. Pretty Date: Nov 6, 2023`
  * To Format: `YYYY-MM-DD`
  * To Timezone: `UTC`
  * From Format: `MMM D, YYYY`
  * From Timezone: `UTC`


### 3. Run Javascript in Code by Zapier

* App: `Code by Zapier`
* Event: `Run Javascript`
* Step details
  * Input Data
    * `todayDate`: `2. Output: 2023-11-06`
* Code:

    ```javascript
    // Set the discourseDomain variable to your Discourse domain
    const discourseDomain = 'forum.kintone.dev';
    // Extract the day, month, and year from the todayDate string
    let day = inputData.todayDate.slice(8, 10);
    let month = inputData.todayDate.slice(5, 7);
    let year = inputData.todayDate.slice(0, 4);

    // Convert the day, month, and year to numbers
    day = Number(day);
    month = Number(month);
    year = Number(year);

    // Calculate the prior month
    let priorMonth = month - 1;

    // If the prior month is 0, set the prior month to December (12) and decrement the year
    if (priorMonth == 0) {
      priorMonth = 12;
      year--;
    }

    // Initialize variables for the first day and last day of the month
    let firstDay = 1; // Set the first day of the month to 1
    let lastDay = 31; // Most months have 31 days

    // Determine the number of days in the prior month (April, June, September, and November have 30 days)
    if (priorMonth == 4 || priorMonth == 6 || priorMonth == 9 || priorMonth == 11) {
      lastDay = 30;
    }

    // If the prior month is February, check if it's a leap year
    if (priorMonth == 2) {
      if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        lastDay = 29;
      } else {
        lastDay = 28;
      }
    }

    // Format the prior month, first day, and last day as strings in YYYY-MM-DD format
    priorMonth = priorMonth.toString().padStart(2, "0");
    firstDay = firstDay.toString().padStart(2, "0");
    lastDay = lastDay.toString().padStart(2, "0");

    // Combine the prior month, first day, and last day with the year to get the full date
    const start = `${year}-${priorMonth}-${firstDay}`;
    const end = `${year}-${priorMonth}-${lastDay}`;

    // Generate the REST API Endpoint URL
    const endPoint = `https://${discourseDomain}/admin/reports/signups.json?end_date=${end}&mode=table&start_date=${start}`

    // Set the output in the format that Zapier expects
    output = { url: endPoint};
    ```


### 4. Get Request in Webhooks by Zapier

* App: `Webhooks by Zapier`
* Event: `GET`
* Step details
  * URL: `3. Output: url`
  * Query String Params: blank
  * Send As JSON: `no`
  * Unflatten: `yes`
  * Headers
    * `Api-Key`: `your_discourse_api_key`
    * `Api-Username`: `your_discourse_username`


### 5. Run Javascript in Code by Zapier

* App: `Code by Zapier`
* Event: `Run Javascript`
* Step details:
  * Input Data
    * `inputArray`: `4. Report Data Y:`
  * Code:

    ```javascript
    // Split the input string into an array of numbers
    const inputArray = inputData.inputArray.split(",").map(Number);

    // Use the reduce function to sum up all the numbers in the array
    const sum = inputArray.reduce((total, num) => total + num, 0);

    // Create an output object with the sum as a property
    output = { sum: sum };
    ```


### 6. Send Channel Message in Slack

* App: `Slack`
* Event: `Send Channel Message`
* Slack: Your Account
* Step details
  * Channel: `#your_slack_channel`
  * Message Text: `Last month's sign-up count: {5. Output: sum}`
* Send as a bot?: `yes`


## Conclusion

I hope this demonstrates that it is pretty simple to build an automation to handle a Discourse metric.
