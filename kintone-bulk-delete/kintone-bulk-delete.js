javascript: (function () {
  const logAndAlert = (message, isAlert = true, isConsole = true) => {
    if (isAlert) alert(message);
    if (isConsole) console.log(message);
  };
  const userCancel = 'User cancelled the operation.';
  const recNotDeleted = 'No records were deleted.';
  const askForNumber = (question) => {
    let userInput;
    do {
      userInput = prompt(question);
      if (userInput === null || userInput === undefined) {
        return logAndAlert('Deletion canceled by the user.');
      }
      if (!isNaN(userInput) && userInput.trim() !== '') {
        logAndAlert(`User entered: ${userInput}`, false);
        return +userInput;
      }
    } while (!confirm(`${userInput} is not a valid number.\nClick "OK" to try again.\nClick "Cancel" to cancel the operation.`));
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
  if (deleteEnd < deleteStart) {
    return alert('The last record cannot be before the start record. Deletion cancelled.');
  }

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
