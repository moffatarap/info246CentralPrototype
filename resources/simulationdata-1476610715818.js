function initData() {
  jimData.variables["answerCallForTime"] = "0";
  jimData.variables["AlertLevelTitle1"] = "Priority:";
  jimData.variables["AlertLevelTitle0"] = "Priority:";
  jimData.variables["4DispatchUnit"] = "0";
  jimData.variables["dispatchEventClickMinor"] = "0";
  jimData.variables["answerCall"] = "0";
  jimData.variables["callStartCaller1"] = "";
  jimData.variables["dispatchSevereShowHide"] = "0";
  jimData.variables["callStartCaller0"] = "";
  jimData.variables["2DispatchVar"] = "";
  jimData.variables["callLogedFinal"] = "0";
  jimData.variables["test"] = "";
  jimData.variables["eventClickCounterMinor"] = "0";
  jimData.variables["callerQClick"] = "0";
  jimData.variables["1DispatchVar"] = "";
  jimData.variables["currentTime"] = "";
  jimData.variables["callerIDData"] = "";
  jimData.variables["CallerIDTitle0"] = "CallerID:";
  jimData.variables["CallerIDTitle1"] = "CallerID:";
  jimData.variables["0DispatchVar"] = "0";
  jimData.variables["dispatchMinorShowHide"] = "0";
  jimData.variables["callerMuteCall0"] = "0";
  jimData.variables["callerQNumber"] = "0";
  jimData.variables["setTimeVarInital"] = "1";
  jimData.variables["callEndCaller0"] = "0";
  jimData.variables["callEndCaller1"] = "0";
  jimData.variables["testRemove"] = "0";
  jimData.variables["callerQName"] = "0";
  jimData.variables["LocationTitle0"] = "Location:";
  jimData.variables["LocationTitle1"] = "Location:";
  jimData.variables["dispatchSpecialShowHide"] = "0";
  jimData.variables["currentCallsFieldsClick"] = "0";
  jimData.variables["callLog0"] = "0";
  jimData.variables["callLog1"] = "0";
  jimData.variables["currentCall1"] = "";
  jimData.variables["newCaller1"] = "0";
  jimData.variables["5CompleteJob"] = "0";
  jimData.variables["callStartSelect1"] = "0";
  jimData.variables["unitComsMuteCall1"] = "0";
  jimData.variables["currentCall0"] = "";
  jimData.variables["callStartSelect0"] = "0";
  jimData.variables["newCaller0"] = "0";
  jimData.variables["unitComsMuteCall2"] = "0";
  jimData.variables["3LogCall"] = "0";
  jimData.variables["unitComsMuteCall0"] = "0";
  jimData.variables["1EnterCallDetail"] = "0";
  jimData.variables["callerIDEndTime0"] = "";
  jimData.variables["callerQ6"] = "0";
  jimData.variables["callerQ3"] = "0";
  jimData.variables["callerQ2"] = "0";
  jimData.variables["callerQ5"] = "0";
  jimData.variables["callerQ4"] = "0";
  jimData.variables["callerQ1"] = "0";
  jimData.variables["callerQDescription"] = "0";
  jimData.variables["dataMaster"] = "";
  jimData.datamasters["eventStatusDataMaster"] = [
    {
      "id": 1,
      "datamaster": "eventStatusDataMaster",
      "userdata": {
        "EventStatus": ""
      }
    },
    {
      "id": 2,
      "datamaster": "eventStatusDataMaster",
      "userdata": {
        "EventStatus": "Logged"
      }
    },
    {
      "id": 3,
      "datamaster": "eventStatusDataMaster",
      "userdata": {
        "EventStatus": "Actioned"
      }
    },
    {
      "id": 4,
      "datamaster": "eventStatusDataMaster",
      "userdata": {
        "EventStatus": "In Progress"
      }
    },
    {
      "id": 5,
      "datamaster": "eventStatusDataMaster",
      "userdata": {
        "EventStatus": "Completed"
      }
    }
  ];

  jimData.datamasters["statusDataMaster"] = [
    {
      "id": 1,
      "datamaster": "statusDataMaster",
      "userdata": {
        "Status": "Patrolling"
      }
    },
    {
      "id": 2,
      "datamaster": "statusDataMaster",
      "userdata": {
        "Status": "Dispatched"
      }
    },
    {
      "id": 3,
      "datamaster": "statusDataMaster",
      "userdata": {
        "Status": "Actioned"
      }
    },
    {
      "id": 4,
      "datamaster": "statusDataMaster",
      "userdata": {
        "Status": "On Scene"
      }
    },
    {
      "id": 5,
      "datamaster": "statusDataMaster",
      "userdata": {
        "Status": "Logged"
      }
    }
  ];

  jimData.datamasters["priorityDataMaster"] = [
    {
      "id": 1,
      "datamaster": "priorityDataMaster",
      "userdata": {
        "priorityData": ""
      }
    },
    {
      "id": 2,
      "datamaster": "priorityDataMaster",
      "userdata": {
        "priorityData": "Minor"
      }
    },
    {
      "id": 3,
      "datamaster": "priorityDataMaster",
      "userdata": {
        "priorityData": "Severe"
      }
    },
    {
      "id": 4,
      "datamaster": "priorityDataMaster",
      "userdata": {
        "priorityData": "Special"
      }
    }
  ];

  jimData.datamasters["masterDataTable"] = [
    {
      "id": 1,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1035",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "1",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 2,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1302",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "2",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 3,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1347",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "3",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 4,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1490",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "4",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 5,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1382",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "5",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 6,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Minor",
        "UnitID": "1766",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "6",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 7,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Severe",
        "UnitID": "2759",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "7",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 8,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Severe",
        "UnitID": "2118",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "8",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 9,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Severe",
        "UnitID": "2698",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "9",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 10,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Severe",
        "UnitID": "2243",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "10",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 11,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Severe",
        "UnitID": "2707",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 12,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Special",
        "UnitID": "3174",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 13,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Special",
        "UnitID": "3139",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    },
    {
      "id": 14,
      "datamaster": "masterDataTable",
      "userdata": {
        "ResponceLevel": "Special",
        "UnitID": "3611",
        "Status": "",
        "Patrolling": "Patrolling",
        "On Scene": "On Scene",
        "Dispatched": "Dispatched",
        "Location": "",
        "CallerID": "",
        "CallStatus": "",
        "Dispatch": "",
        "callerNames": "",
        "Description": "",
        "Caller Number": ""
      }
    }
  ];

  jimData.datamasters["locationDataMaster"] = [
    {
      "id": 1,
      "datamaster": "locationDataMaster",
      "userdata": {
        "Locations": ""
      }
    },
    {
      "id": 2,
      "datamaster": "locationDataMaster",
      "userdata": {
        "Locations": "22 Sussex Street"
      }
    },
    {
      "id": 3,
      "datamaster": "locationDataMaster",
      "userdata": {
        "Locations": "139 Vivian Street"
      }
    },
    {
      "id": 4,
      "datamaster": "locationDataMaster",
      "userdata": {
        "Locations": "21 Lambton Quay"
      }
    }
  ];

  jimData.datamasters["callerNameDatamaster"] = [
    {
      "id": 1,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts"
      }
    },
    {
      "id": 2,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts1"
      }
    },
    {
      "id": 3,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts2"
      }
    },
    {
      "id": 4,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts3"
      }
    },
    {
      "id": 5,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts3"
      }
    },
    {
      "id": 6,
      "datamaster": "callerNameDatamaster",
      "userdata": {
        "Name": "Butts4"
      }
    }
  ];

  jimData.datamasters["loggedCallsDataMaster"] = [
    {
      "id": 1,
      "datamaster": "loggedCallsDataMaster",
      "userdata": {
        "Priority Level": "Special",
        "Description": "Robbery",
        "CallerID": "03",
        "Location": "Paraparumu",
        "Time Logged": "1:20am"
      }
    },
    {
      "id": 2,
      "datamaster": "loggedCallsDataMaster",
      "userdata": {
        "Priority Level": "Minor",
        "Description": "Crash",
        "CallerID": "02",
        "Location": "Raumati",
        "Time Logged": "11:10am"
      }
    },
    {
      "id": 3,
      "datamaster": "loggedCallsDataMaster",
      "userdata": {
        "Priority Level": "Minor",
        "Description": "Drunk",
        "CallerID": "01",
        "Location": "Paekakariki",
        "Time Logged": "3:30pm"
      }
    }
  ];

  jimData.datamasters["currentCallsDataMaster"] = [
  ];

  jimData.datamasters["unitComsCallStatus"] = [
    {
      "id": 1,
      "datamaster": "unitComsCallStatus",
      "userdata": {
        "callStatus": "Active"
      }
    },
    {
      "id": 2,
      "datamaster": "unitComsCallStatus",
      "userdata": {
        "callStatus": "Inactive"
      }
    },
    {
      "id": 3,
      "datamaster": "unitComsCallStatus",
      "userdata": {
        "callStatus": "Late"
      }
    }
  ];

  jimData.datamasters["callerIDDataMaster"] = [
    {
      "id": 1,
      "datamaster": "callerIDDataMaster",
      "userdata": {
        "callerIDNumber": ""
      }
    },
    {
      "id": 2,
      "datamaster": "callerIDDataMaster",
      "userdata": {
        "callerIDNumber": "20"
      }
    },
    {
      "id": 3,
      "datamaster": "callerIDDataMaster",
      "userdata": {
        "callerIDNumber": "21"
      }
    },
    {
      "id": 4,
      "datamaster": "callerIDDataMaster",
      "userdata": {
        "callerIDNumber": "22"
      }
    }
  ];

  jimData.isInitialized = true;
}