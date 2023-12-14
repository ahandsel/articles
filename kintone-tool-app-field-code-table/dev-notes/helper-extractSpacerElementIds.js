function extractSpacerElementIds(inputArray) {
  let blankSpaceElementIds = [];

  // Ensure that each object has a 'fields' property and it's an array
  let rawFieldsArray = inputArray.reduce((acc, obj) => {
    if (obj.fields && Array.isArray(obj.fields)) {
      return acc.concat(obj.fields);
    }
    return acc;
  }, []);

  rawFieldsArray.forEach(field => {
    if (field.type === "SPACER" && field.elementId) {
      blankSpaceElementIds.push(field.elementId);
    }
  });

  return blankSpaceElementIds;
}

const inputArray = [{
  "type": "ROW", "fields": [{
    "type": "LABEL", "label": "Label", "size": {
      "width": "65"
    }
  }, {
    "type": "DATE", "code": "Date", "size": {
      "width": "117"
    }
  }, {
    "type": "TIME", "code": "Time", "size": {
      "width": "101"
    }
  }, {
    "type": "DATETIME", "code": "Date_and_time", "size": {
      "width": "196"
    }
  }, {
    "type": "FILE", "code": "Attachment", "size": {
      "width": "207"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "SINGLE_LINE_TEXT", "code": "Text", "size": {
      "width": "193"
    }
  }, {
    "type": "LINK", "code": "Link", "size": {
      "width": "193"
    }
  }, {
    "type": "USER_SELECT", "code": "User_selection", "size": {
      "width": "344"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "RICH_TEXT", "code": "Rich_text", "size": {
      "width": "315", "innerHeight": "125"
    }
  }, {
    "type": "ORGANIZATION_SELECT", "code": "Department_selection", "size": {
      "width": "344"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "GROUP_SELECT", "code": "Group_selection", "size": {
      "width": "344"
    }
  }, {
    "type": "REFERENCE_TABLE", "code": "Related_records"
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "SINGLE_LINE_TEXT", "code": "Lookup", "size": {
      "width": "246"
    }
  }, {
    "type": "SPACER", "elementId": "panda", "size": {
      "width": "117", "height": "66"
    }
  }, {
    "type": "HR", "size": {
      "width": "135"
    }
  }]
}, {
  "type": "SUBTABLE", "code": "Table", "fields": [{
    "type": "SINGLE_LINE_TEXT", "code": "Text_0", "size": {
      "width": "193"
    }
  }, {
    "type": "TIME", "code": "Time_0", "size": {
      "width": "101"
    }
  }]
}, {
  "type": "GROUP", "code": "Field_group", "layout": [{
    "type": "ROW", "fields": [{
      "type": "NUMBER", "code": "Number_0", "size": {
        "width": "193"
      }
    }]
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "RECORD_NUMBER", "code": "Record_number", "size": {
      "width": "120"
    }
  }, {
    "type": "CREATOR", "code": "Created_by", "size": {
      "width": "136"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "SPACER", "elementId": "kowala", "size": {
      "width": "117", "height": "66"
    }
  }, {
    "type": "MODIFIER", "code": "Updated_by", "size": {
      "width": "136"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "UPDATED_TIME", "code": "Updated_datetime", "size": {
      "width": "196"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "MULTI_LINE_TEXT", "code": "Text_area", "size": {
      "width": "315", "innerHeight": "125"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "NUMBER", "code": "Number", "size": {
      "width": "193"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "CALC", "code": "Calculated", "size": {
      "width": "193"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "RADIO_BUTTON", "code": "Radio_button_0", "size": {
      "width": "241"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "CHECK_BOX", "code": "Check_box", "size": {
      "width": "241"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "MULTI_SELECT", "code": "Multi_choice", "size": {
      "width": "197"
    }
  }]
}, {
  "type": "ROW", "fields": [{
    "type": "DROP_DOWN", "code": "Drop_down", "size": {
      "width": "196"
    }
  }]
}
];
const result = extractSpacerElementIds(inputArray);
console.log(result);
