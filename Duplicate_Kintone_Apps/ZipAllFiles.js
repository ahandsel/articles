/* global JSZip */
/* global JSZipUtils */
/* global saveAs */
///
/// License
/// FileSaver.js MIT https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
/// jszip MIT or GPLv3 https://github.com/Stuk/jszip/blob/master/LICENSE.markdown
/// jszip-utils MIT or GPLv3 https://github.com/Stuk/jszip-utils/blob/master/LICENSE.markdown
///

(function () {
  "use strict";
  var fieldCode = "Attachment"; //Field code of Attachment field
  var isGuestSpace = false;

  //Get records function(async) - limit of 100 records
  function getAppRecords() {
    var url = kintone.api.url("/k/v1/records", isGuestSpace);
    var appId = kintone.app.getId();
    var condition = kintone.app.getQueryCondition() || "";
    var query = condition + "order by $id asc";
    var body = {
      "app": appId,
      "query": query,
      "field": fieldCode
    };
    return kintone.api(url, "GET", body);
  }

  //Extract and list fileKeys
  function getFileKeys(json) {
    var keys = [];
    for (var i = 0; i < json.records.length; i++) {
      var filetype = json.records[i][fieldCode];
      // When multiple files are attached
      for (var j = 0; j < filetype.value.length; j++) {
        keys.push(filetype.value[j]);
      }
    }
    return keys;
  }

  // Check file sizes
  function checkFileSize(filekeys) {
    if (filekeys.length === 0) {
      return kintone.Promise.reject("Attachements were not found.");
    }
    var totalsize = 0;
    for (var i = 0; i < filekeys.length; i++) {
      totalsize += parseInt(filekeys[i]["size"], 10);
    }
    if (totalsize < 999) { // less than 1KB
      totalsize = String(totalsize);
    } else if (totalsize < 999999) { // less than 1MB
      totalsize = parseInt(totalsize / 1000, 10) + "K";
    } else if (totalsize < 999999999) { // less than 1GB
      totalsize = parseInt(totalsize / 1000000, 10) + "M";
    } else {
      //Limit to 1GB
      return kintone.Promise.reject("File size is too large");
    }
    var dflag = confirm("Download " + totalsize + " bytes. Is it OK to proceed?");
    if (!dflag) {
      return kintone.Promise.reject("Download canceled");
    }
    return filekeys;
  }

  //Get file URL (async)
  function addFileURL(key) {
    return new kintone.Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var params = {
        "fileKey": key["fileKey"]
      };
      var url = kintone.api.urlForGet("/k/v1/file", params, isGuestSpace);
      xhr.open("GET", url, true); //async
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (xhr.status === 200) {
          var blob = new Blob([xhr.response]);
          var wurl = window.URL || window.webkitURL;
          var blobUrl = wurl.createObjectURL(blob);
          key["blobUrl"] = blobUrl; // Add URL to key record
          resolve(key);
        } else {
          reject(JSON.parse(xhr.response));
        }
      };
      xhr.send();
    });
  }

  //Get multiple file URLs
  function addfileURLs(filekeys, keynum) {
    var opt_keynum = keynum || 0;
    return addFileURL(filekeys[opt_keynum]).then(function (resp) {
      opt_keynum++;
      if (opt_keynum === filekeys.length) {
        return filekeys;
      }
      return addfileURLs(filekeys, opt_keynum);
    });
  }

  //Asynchronously download a file and add it to the zip file
  function downloadFile(zip, url, filename) {
    return new kintone.Promise(function (resolve, reject) {
      // getBinaryContent is an API that retrieves files from URLs asynchronously
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          reject(err);
        }
        zip.file(filename, data, { binary: true });
        resolve(data);
      });
    });
  }

  // Download multiple files
  function downloadFiles(files, zip, filenum) {
    var opt_zip = zip || new JSZip();
    var opt_filenum = filenum || 0;
    return downloadFile(opt_zip, files[opt_filenum]["blobUrl"], files[opt_filenum]["name"]).then(function (data) {
      opt_filenum++;
      if (opt_filenum === files.length) {
        return opt_zip;
      }
      return downloadFiles(files, opt_zip, opt_filenum);
    });
  }

  //Zip the file
  function doZipFile(zip) {
    return zip.generateAsync({ type: "blob" });
  }

  //Save the file
  function saveZipFile(content) {
    //Use FileSaver.js
    return saveAs(content, "example.zip");
  }

  //Button click function
  function getZipFile() {
    getAppRecords()
      .then(getFileKeys)
      .then(checkFileSize)
      .then(addfileURLs)
      .then(downloadFiles)
      .then(doZipFile)
      .then(saveZipFile)
      .catch(function (error) {
        alert(error);
      });
  }

  //Create a button in the Record List view
  kintone.events.on("app.record.index.show", function (e) {
    // For debug
    if (document.getElementById("menuButton") !== null) {
      return;
    }
    var menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.innerHTML = "Download at once";
    menuButton.onclick = function () {
      getZipFile();
    };
    kintone.app.getHeaderMenuSpaceElement().appendChild(menuButton);
  });
})();