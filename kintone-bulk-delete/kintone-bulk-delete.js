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
  if (typeof appId !== 'number') {
    return logAndAlert(`Error: This is not a Kintone App.\nOpen a specific Kintone App when executing this bookmarklet.`);
  }
  const deleteStart = askForNumber('First record to delete:');
  if (deleteStart === undefined) return;
  const deleteEnd = askForNumber('Last record to delete:');
  if (deleteEnd === undefined) return;
  if (deleteEnd < deleteStart) {
    return logAndAlert('The last record cannot be before the start record. Deletion cancelled.', true, false);
  }
  const counterBody = {
    'app': appId,
    'query': `$id >= "${deleteStart}" and $id <= "${deleteEnd}" order by $id asc`,
    'fields': ['$id']
  };
  kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', counterBody, function (resp) {
    const deleteArray = resp.records.map(record => record.$id?.value).filter(Boolean);
    if (deleteArray.length === 0) {
      return logAndAlert('No records were deleted.', false);
    }
    const userConfirmation = window.confirm(`Records from ${deleteStart} to ${deleteEnd} will be deleted in this Kintone App (App ID: ${appId}).\n${deleteArray.length} records in total.\n\n Click "OK" to delete the records.\nClick "Cancel" to cancel the operation.`);
    if (!userConfirmation) return logAndAlert('Deletion cancelled by user.');
    const deleteBody = { 'app': appId, 'ids': deleteArray };
    const deleteMsg = `Records from ${deleteStart} to ${deleteEnd} has been deleted.\nRefresh the page to see the changes.`;
    kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', deleteBody, (resp) => {
      logAndAlert(deleteMsg);
    }, (error) => {
      logAndAlert(`Error! No records were deleted. Check the console for details.`, true, false);
      console.error(error);
    });
  }, function (error) {
    console.error(error);
  });
})();
