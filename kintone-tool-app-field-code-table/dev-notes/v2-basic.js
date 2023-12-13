const body = {
  'app': kintone.app.getId(),
};

kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function (resp) {
  // success
  extractData(resp);
}, function (error) {
  // error
  console.log(error);
});

function extractData(rawJson) {
  const rawProperties = rawJson.properties;
  const mdTableHeader = '| Field Code | Name | Type |\n| ---------- | ---------- | --------------- |';
  const mdRows = [];
  for (const field in rawProperties) {
    const fieldJson = rawProperties[field];
    const type = fieldJson.type;
    const label = fieldJson.label;
    const code = fieldJson.code;
    mdRows.push(`| ${code} | ${label} | ${type} |`);
  }
  const mdTable = [mdTableHeader, ...mdRows].join('\n');
  console.log(mdTable);
}