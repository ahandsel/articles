javascript: (function () {
  const userCancel = 'User cancelled the operation.';
  const recNotDeleted = 'No records were deleted.';
  const askForNumber = (question) => {
    while (true) {
      let userInput = prompt(question);
      if (userInput === null) {
        console.log(userCancel);
        return;
      }
      if (isNaN(userInput) || userInput.trim() === '') {
        let reTry = confirm(`${userInput} is not a valid number.\nClick "OK" to try again.\nClick "Cancel" to cancel the operation.`);
        if (!reTry) {
          console.log(userCancel);
          return;
        }
      } else {
        console.log(`User entered: ${userInput}`);
        return Number(userInput);
      }
    }
  };
  const appId = window.kintone?.app?.getId();
  const errMsg = `Error: This is not a Kintone App.\nOpen a specific Kintone App when executing this bookmarklet.`;
  if (appId === undefined) {
    alert(errMsg);
    console.log(errMsg);
    return;
  }
  console.log(`App ID: ${appId}`);
  const deleteStart = askForNumber('First record to delete:');
  if (deleteStart === undefined) return;

  const deleteEnd = askForNumber('Last record to delete:');
  if (deleteEnd === undefined) return;


  let deleteCount = 0;
  let deleteArray = [];
  const counterBody = {
    'app': appId,
    'query': `$id >= "${deleteStart}" and $id <= "${deleteEnd}" order by $id asc`,
    'fields': ['$id']
  };
  kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', counterBody, function (resp) {
    deleteCount = resp.records.length;
    console.log(resp);
    if (resp.records && Array.isArray(resp.records)) {
      deleteArray = resp.records.map(record => {
        if (record.$id && record.$id.value) {
          return record.$id.value;
        }
        return null;
      }).filter(id => id !== null);
    }
    const userConfirmation = window.confirm(`Records from ${deleteStart} to ${deleteEnd} will be deleted in this Kintone App (App ID: ${appId}).\n${deleteCount} records in total.\n\n Click "OK" to delete the records.\nClick "Cancel" to cancel the operation.`);
    if (!userConfirmation) {
      console.log(userCancel);
      alert(recNotDeleted);
      return;
    }
    console.log('deleteArray');
    console.log(deleteArray);
    const deleteBody = { 'app': appId, 'ids': deleteArray };
    const deleteMsg = `Records from ${deleteStart} to ${deleteEnd} has been deleted.\nRefresh the page to see the changes.`;
    kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', deleteBody, (resp) => {
      console.log(deleteMsg);
      alert(deleteMsg);
    }, (error) => {
      console.log(recNotDeleted);
      console.log(error);
      alert(`Error! ${recNotDeleted}\nCheck the console for more details.`);
    });
  }, function (error) {
    console.log(error);
  });
})();
