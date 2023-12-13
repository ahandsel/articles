const body = {
  'app': kintone.app.getId(),
};

kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function (resp) {
  // success
  console.log(resp);
}, function (error) {
  // error
  console.log(error);
});