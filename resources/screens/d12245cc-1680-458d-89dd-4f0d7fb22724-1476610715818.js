jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-callerID0PriorityListBox-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callStartSelect0"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newCaller0",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "newCaller0"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callStartSelect0",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callStartSelect0"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callStartSelect0"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callEndCaller0",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callEndCaller0"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerID0-0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerIDCallLog0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-caller0MuteImage")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerMuteCall0"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "value": "./images/3a7a97cb-4cb6-483a-819a-412312f986f6.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerMuteCall0",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "value": "./images/ee799c09-eb1d-4deb-9e21-87a14a7719b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerMuteCall0",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-CallerID0logCall-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "callStartSelect0"
                  },"1" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "currentCallsFieldsClick"
                  },"6" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-descriptionCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0Description-0",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-CallerID0CallEnd-0",
                    "value": {
                      "datatype": "variable",
                      "element": "currentTime"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callEndCallerID0_1",
                    "value": {
                      "datatype": "variable",
                      "element": "currentTime"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLog0",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callLog0"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Logged"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-priorityLevCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0PriorityListBox-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_15 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_15 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_19 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_19 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_23 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_23": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_23 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_27 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_27": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_27 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_17 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_17 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-eventMap0Dynamic_Panel",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0ProrityLv",
                    "value": {
                      "action": "jimAddToData",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "AlertLevelTitle0"
                      },{
                        "datatype": "property",
                        "target": "#s-callerID0PriorityListBox-0",
                        "property": "jimGetSelectedValue"
                      } ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "0DispatchVar",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-currentCallLog"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "shake",
                      "easing": "swing",
                      "duration": 100
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerID0PriorityListBox-0",
                    "property": "jimGetSelectedValue"
                  },"Minor" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "currentCallsFieldsClick"
                  },"6" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-minorUnits-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLog0",
                    "value": "1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-comsCallStatusList-0",
                    "value": "Active"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsLastContactBox-0",
                    "value": "00:00"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLogedFinal",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerID0PriorityListBox-0",
                    "property": "jimGetSelectedValue"
                  },"Severe" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "currentCallsFieldsClick"
                  },"6" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-severeUnits-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLog0",
                    "value": "1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-comsCallStatusList-0_1",
                    "value": "Active"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsLastContactBox-0_1",
                    "value": "00:00"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLogedFinal",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerID0PriorityListBox-0",
                    "property": "jimGetSelectedValue"
                  },"Special" ]
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "currentCallsFieldsClick"
                  },"6" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-specialUnits-2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLog0",
                    "value": "1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-comsCallStatusList-0_2",
                    "value": "Active"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsLastContactBox-0_2",
                    "value": "00:00"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callLogedFinal",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-answerButton")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-callerQuestionsLog"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "answerCall",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "answerCall"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "answerCallForTime",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "answerCallForTime"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-answerTransfer")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-transferText",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/997ba790-17cc-4753-95d0-6412afb2af91",
                    "transition": "fade"
                  },
                  "exectype": "timed",
                  "delay": 1500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQuestionSubmit")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callerQClick"
                      },"5" ]
                    },{
                      "action": "jimNotEquals",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-callerQInputField-1",
                        "property": "jimGetValue"
                      },"Enter Response" ]
                    } ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-callerQInputField-1_1",
                      "property": "jimGetValue"
                    },"Enter Response" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerQInputField-1_2",
                    "property": "jimGetValue"
                  },"Enter Response" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-callPannel"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-errorCheck",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQFakeCall")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-fakeCallLogged",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-answerCall"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQCheckBox-1",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitComsMuteIcon-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "unitComsMuteCall0"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-0",
                    "value": "./images/3a7a97cb-4cb6-483a-819a-412312f986f6.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall0",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-0",
                    "value": "./images/ee799c09-eb1d-4deb-9e21-87a14a7719b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall0",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitComsMuteIcon-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "unitComsMuteCall1"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-1",
                    "value": "./images/3a7a97cb-4cb6-483a-819a-412312f986f6.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall1",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-1",
                    "value": "./images/ee799c09-eb1d-4deb-9e21-87a14a7719b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall1",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitComsMuteIcon-2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "unitComsMuteCall2"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-2",
                    "value": "./images/3a7a97cb-4cb6-483a-819a-412312f986f6.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall2",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsMuteIcon-2",
                    "value": "./images/ee799c09-eb1d-4deb-9e21-87a14a7719b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall2",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay1Status")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay1Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay1Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay1ReAssign")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "0DispatchVar"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay1CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay1ReAssign",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-1",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "callerIDDataMaster"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay1ReAssign",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay1JobComplete")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-eventMap0Dynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": "Patrolling"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-eventMap1EventStatus")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-eventMap1EventStatus",
                  "property": "jimGetSelectedValue"
                },"Completed" ]
              },
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap1EventStatus",
                    "value": "Completed"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-eventMap1Dynamic_Panel_1",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-errorProceed")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Special" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Special"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialLocationBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchSpecialShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialUnitIDBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay1UnitIDNumb",
                    "value": "Unit: 3174"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Minor" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Minor"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorLocationStatusBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#6DFD30",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#6DFD30",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchMinorShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorUnitIDBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Severe" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Severe"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereLocationBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#FFFF00",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchSevereShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay1UnitIDNumb",
                    "value": "Unit: 2759"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "1DispatchVar",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "1DispatchVar"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Minor" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Minor"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorLocationStatusBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#6DFD30",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#6DFD30",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchMinorShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorUnitIDBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-errorCancel")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchMinorShowHide",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-MinorDispathcButton-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-CallerID0CallEnd-0",
                    "property": "jimGetValue"
                  },"End Time" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "callStartSelect0"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DispatchingUnits"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "0DispatchVar",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "0DispatchVar"
                      },"1" ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 20
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "0DispatchVar"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-priorityLevCaller0",
                    "property": "jimGetValue"
                  },"Minor" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Minor"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorLocationStatusBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#6DFD30",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#6DFD30",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchMinorShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-MinorUnitIDBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "unitComsMuteCall0",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-callerID0PriorityListBox-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-callerID0LocationDrop-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-callerID0-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Name-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Description-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Number-0",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-CallerID0CallStart-0",
                    "value": "Start Time"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-CallerID0CallEnd-0",
                    "value": "End Time"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "value": "./images/bbd7674a-bc47-4811-a9d3-99085ca4997a.png"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-comsCallStatusList-0",
                    "value": "Active"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitComsLastContactBox-0",
                    "value": "00:00"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0PriorityListBox-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0LocationDrop-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Name-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Description-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Number-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallStart-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallEnd-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0logCall-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Severe" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Special" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SevereDispathcButton-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-CallerID0CallEnd-0",
                    "property": "jimGetValue"
                  },"End Time" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "callStartSelect0"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DispatchingUnits"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "0DispatchVar",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "0DispatchVar"
                      },"1" ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 20
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "0DispatchVar"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerID0PriorityListBox-0",
                    "property": "jimGetSelectedValue"
                  },"Severe" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Severe"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereLocationBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#FFFF00",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#FFFF00",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchSevereShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SevereResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay1UnitIDNumb",
                    "value": "Unit: 2759"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0PriorityListBox-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0LocationDrop-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Name-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Description-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Number-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallStart-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallEnd-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0logCall-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Minor" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Special" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SpecialDispatchButton-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-CallerID0CallEnd-0",
                    "property": "jimGetValue"
                  },"End Time" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "callStartSelect0"
                  },"1" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DispatchingUnits"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "0DispatchVar",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "0DispatchVar"
                      },"1" ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 20
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "0DispatchVar"
                  },"1" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerID0PriorityListBox-0",
                    "property": "jimGetSelectedValue"
                  },"Special" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Priority",
                    "value": "Priority Level: Special"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-unitDisplay0Status",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialCallerIDDropDown-1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0Location",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialLocationBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0PriorityLev",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialResponceLevel-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialStatusBox-1",
                    "value": "Dispatched"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Actioned"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "dispatchSpecialShowHide",
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitId",
                    "value": {
                      "datatype": "property",
                      "target": "#s-SpecialUnitIDBox-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay1UnitIDNumb",
                    "value": "Unit: 3174"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_5CompleteJob": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_4DispatchUnit": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_3EnterDetailsAndLogCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_2AskQuestionsa": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-systemSteps_1AnswerCall": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0PriorityListBox-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0LocationDrop-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Name-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Description-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-callerID0Number-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallStart-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0CallEnd-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-caller0MuteImage",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-CallerID0logCall-0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 25
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Minor" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"0Special" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-dispatchErrorDynamic_Panel",
                    "effect": {
                      "type": "shake",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-minorUnitsDispatch-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-minorUnits-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-severeUnitsDispatch-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-severeUnits-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-specialUnitsDispatch-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-specialUnits-2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-specialUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-severeUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-minorUnitsDispatch-Button": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-systemSteps_2AskQuestionsa")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "answerCall"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-callerQuestionsLog"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-systemSteps_3EnterDetailsAndLogCall")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimGreaterOrEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callerQClick"
                      },"5" ]
                    },{
                      "action": "jimNotEquals",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-callerQInputField-1",
                        "property": "jimGetValue"
                      },"Enter Response" ]
                    } ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-callerQInputField-1_1",
                      "property": "jimGetValue"
                    },"Enter Response" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-callerQInputField-1_2",
                    "property": "jimGetValue"
                  },"Enter Response" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-callPannel"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-eventMap0EventStatus")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-eventMap0EventStatus",
                  "property": "jimGetSelectedValue"
                },"Completed" ]
              },
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "Completed"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-eventMap0Dynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/997ba790-17cc-4753-95d0-6412afb2af91",
                    "transition": "fade"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay0Status")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Minor" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Severe" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereStatusBox-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-callerID0PriorityListBox-0",
                  "property": "jimGetSelectedValue"
                },"Special" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialStatusBox-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0UnitStatus",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Status",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay0Reasign")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "0DispatchVar"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-unitDisplay0CallerID",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Reasign",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-1",
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "callerIDDataMaster"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-unitDisplay0Reasign",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay0JobComplete")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-DynamicUnitDisplay0",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-eventMap0Dynamic_Panel",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 150
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorUnitStatusBox-1",
                    "value": "Patrolling"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-unitDisplay0PriorityLev input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/997ba790-17cc-4753-95d0-6412afb2af91",
                    "transition": "fade"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-errorImageClose")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "fade",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-errorImageClose_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-noDispatchError",
                    "effect": {
                      "type": "fade",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-dispatchBlurBackGround",
                    "effect": {
                      "type": "fade",
                      "duration": 50
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-DispatchingUnits"
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "currentCallsFieldsClick"
                },"6" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": "6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-callerQCheckBox-1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQ1",
                      "value": "1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-callerQCheckBox-1_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1_1",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQ2",
                      "value": "1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-callerQCheckBox-1_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1_2",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQ3",
                      "value": "1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-callerQCheckBox-1_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1_3",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_3": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_3 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_3 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-callerQCheckBox-1_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1_4",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_4": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_4 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_4 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-callerQCheckBox-1_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-callerQCheckBox-1_5",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_5": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_5 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_5 span": {
                        "attributes": {
                          "color": "#08AE9E",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
                        }
                      }
                    } ],
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "variable": "callerQClick",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "callerQClick"
                        },"1" ]
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keydown.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .keydown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-callerID0PriorityListBox-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-callerID0LocationDrop-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-callerID0LocationDrop-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-callerID0-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-callerID0-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-callerID0Name-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-callerID0Name-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-callerID0Description-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-callerID0Description-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-callerID0Number-0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-incommingCall")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-incommingCall",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-incommingCall",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-incommingCall",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-incommingCall",
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Time")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "setTimeVarInital",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "setTimeVarInital"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Date")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Date",
                    "value": {
                      "action": "jimSystemTime"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Date",
                    "value": {
                      "action": "jimSystemDate"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-callerID0PriorityListBox-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callLog0"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-priorityLevCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0PriorityListBox-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerID0LocationDrop-0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-locationCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0LocationDrop-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerID0Name-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQName"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-nameCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0Name-0",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerID0Description-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQName"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-descriptionCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0Description-0",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerID0Number-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQName"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-dnumberCaller0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0Number-0",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQInputField-1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Description-0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerQInputField-1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQDescription"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQDescription",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQ1"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callerQClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1 span": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQCheckBox-1",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQInputField-1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Name-0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerQInputField-1_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1_1 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQName"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQName",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQ2"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callerQClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_1 span": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQCheckBox-1_1",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQInputField-1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerID0Number-0",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerQInputField-1_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQInputField-1_2 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQNumber"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQNumber",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentCallsFieldsClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "currentCallsFieldsClick"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "callerQ3"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "callerQClick",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "callerQClick"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "materialdesignjim-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-callerQCheckBox-1_2 span": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQCheckBox-1_2",
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay1Status")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-unitDisplay1Status",
                  "property": "jimGetSelectedValue"
                },"On Scene" ]
              },
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "In Progress"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-unitDisplay0Status")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-unitDisplay0Status",
                  "property": "jimGetSelectedValue"
                },"On Scene" ]
              },
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-eventMap0EventStatus",
                    "value": "In Progress"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-callerQInputField-1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQInputField-1",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQInputField-1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQInputField-1_1",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerQInputField-1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-callerQInputField-1_2",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-errorImageClose") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-errorImageClose_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-errorImageClose_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-errorImageClose")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-errorImageClose_1")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-CallerID0CallStart-0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "answerCallForTime") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "answerCallForTime"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-CallerID0CallStart-0",
                    "value": {
                      "datatype": "variable",
                      "element": "currentTime"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-callerIDCallLog0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0CallerID",
                    "value": {
                      "action": "jimAddToData",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CallerIDTitle0"
                      },{
                        "datatype": "property",
                        "target": "#s-callerID0-0",
                        "property": "jimGetSelectedValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-locationCaller0")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-eventMap0Location",
                    "value": {
                      "action": "jimAddToData",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "LocationTitle0"
                      },{
                        "datatype": "property",
                        "target": "#s-callerID0LocationDrop-0",
                        "property": "jimGetSelectedValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Time")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "setTimeVarInital") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "setTimeVarInital"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Time",
                    "value": {
                      "action": "jimSystemTime"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "setTimeVarInital",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "setTimeVarInital"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "currentTime",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Time",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-MinorCallerIDDropDown-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-MinorCallerIDDropDown-2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-2",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-MinorCallerIDDropDown-3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-MinorCallerIDDropDown-3",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SevereCallerIDDropDown-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereCallerIDDropDown-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SevereCallerIDDropDown-2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereCallerIDDropDown-2",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SevereCallerIDDropDown-3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SevereCallerIDDropDown-3",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SpecialCallerIDDropDown-1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialCallerIDDropDown-1",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SpecialCallerIDDropDown-2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialCallerIDDropDown-2",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SpecialCallerIDDropDown-3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "callLog0"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-SpecialCallerIDDropDown-3",
                    "value": {
                      "datatype": "property",
                      "target": "#s-callerID0-0",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });