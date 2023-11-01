javascript: (function () {
  const askForNumber = (question) => {
    while (true) {
      let userInput = prompt(question);
      if (userInput === null) {
        console.log('User cancelled the operation.');
        return;
      }
      if (isNaN(userInput) || userInput.trim() === '') {
        let reTry = confirm(`${userInput} is not a valid number.\nClick "OK" to try again.\nClick "Cancel" to cancel the operation.`);
        if (!reTry) {
          console.log('User cancelled the operation.');
          return;
        }
      } else {
        console.log(`User entered: ${userInput}`);
        return Number(userInput);
      }
    }
  };
  const appId = window.kintone?.app?.getId();
  if (appId === undefined) {
    alert(`Error: This is not a Kintone App.\nOpen a specific Kintone App when executing this bookmarklet.`);
    console.log(`This is not a Kintone App.\nOpen a specific Kintone App when executing this bookmarklet.\nApp ID: ${appId}`);
    return;
  }
  console.log(`App ID: ${appId}`);
  const deleteStart = askForNumber(`First record to delete:`);
  if (deleteStart === undefined) {
    return;
  }
  console.log(deleteStart);
  const deleteEnd = askForNumber(`Last record to delete:`);
  if (deleteEnd === undefined) {
    return;
  }
  let deleteList = [];
  for (let i = deleteStart; i <= deleteEnd; i++) {
    deleteList.push(i);
  }
  const count = deleteList.length;
  const userConfirmation = window.confirm(`Records from ${deleteStart} to ${deleteEnd} will be deleted (${count} records in total) in this Kintone App (App ID: ${appId}). \n\n Click "OK" to delete the records. \n Click "Cancel" to cancel the operation.`);
  if (userConfirmation) {
    const body = {
      'app': appId,
      'ids': deleteList
    };
    kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', body, function (resp) {
      console.log(`Records from ${deleteStart} to ${deleteEnd} has been deleted \n ${count} records in total.\nRefresh the page to see the changes.`);
    }, function (error) {
      console.log(error);
      alert(`Records are deleted.\nRefresh the page to see the changes.`)
    });
  } else {
    console.log(`Operation cancelled by user.`);
    alert(`No records were deleted.`);
  }
})();
