let body = {
  'app': appId,
  'query': `$id >= "${deleteStart}" and $id <= "${deleteEnd}" order by $id asc`,
  'fields': ['$id']
};
kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body, function (resp) {
  console.log(resp);
  console.log(resp.records.length);
}, function (error) {
  console.log(error);
});