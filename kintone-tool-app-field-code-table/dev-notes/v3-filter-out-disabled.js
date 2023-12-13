// Removes fields that have "enabled": false from the output.

const body = {
  'app': kintone.app.getId(),
};

kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function (resp) {
  extractData(resp);
}, function (error) {
  console.log(error);
});

function extractData(rawJson) {
  const rawProperties = rawJson.properties;

  const mdTableHeader = `| Field Name | Code | Type |\n| ---------- | ---------- | --------------- |`;
  const mdRows = [];

  for (const field in rawProperties) {
    const fieldJson = rawProperties[field];
    const type = fieldJson.type;
    const label = fieldJson.label;
    const code = fieldJson.code;
    if (fieldJson.hasOwnProperty('enabled')) {
      if (fieldJson.enabled === true) {
        mdRows.push(`| ${label} | ${code} | ${type} |`);
      }
    } else {
      mdRows.push(`| ${label} | ${code} | ${type} |`);
    }
  }
  const mdTable = [mdTableHeader, ...mdRows].join('\n');
  console.log(mdTable);
}