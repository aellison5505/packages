/**********************************************************************
 * Extern for DayPicker
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var DayPicker = {
  "VERSION": {},
  "propTypes": {
    "initialMonth": {
      "isRequired": function () {}
    },
    "numberOfMonths": {
      "isRequired": function () {}
    },
    "selectedDays": {
      "isRequired": function () {}
    },
    "disabledDays": {
      "isRequired": function () {}
    },
    "modifiers": {
      "isRequired": function () {}
    },
    "locale": {
      "isRequired": function () {}
    },
    "localeUtils": {
      "isRequired": function () {}
    },
    "enableOutsideDays": {
      "isRequired": function () {}
    },
    "fixedWeeks": {
      "isRequired": function () {}
    },
    "canChangeMonth": {
      "isRequired": function () {}
    },
    "reverseMonths": {
      "isRequired": function () {}
    },
    "pagedNavigation": {
      "isRequired": function () {}
    },
    "fromMonth": {
      "isRequired": function () {}
    },
    "toMonth": {
      "isRequired": function () {}
    },
    "onKeyDown": {
      "isRequired": function () {}
    },
    "onDayClick": {
      "isRequired": function () {}
    },
    "onDayKeyDown": {
      "isRequired": function () {}
    },
    "onDayMouseEnter": {
      "isRequired": function () {}
    },
    "onDayMouseLeave": {
      "isRequired": function () {}
    },
    "onDayTouchStart": {
      "isRequired": function () {}
    },
    "onDayTouchEnd": {
      "isRequired": function () {}
    },
    "onDayFocus": {
      "isRequired": function () {}
    },
    "onMonthChange": {
      "isRequired": function () {}
    },
    "onCaptionClick": {
      "isRequired": function () {}
    },
    "renderDay": {
      "isRequired": function () {}
    },
    "weekdayComponent": function () {},
    "weekdayElement": {
      "isRequired": function () {}
    },
    "navbarComponent": function () {},
    "navbarElement": {
      "isRequired": function () {}
    },
    "captionElement": {
      "isRequired": function () {}
    },
    "dir": {
      "isRequired": function () {}
    },
    "className": {
      "isRequired": function () {}
    },
    "tabIndex": {
      "isRequired": function () {}
    }
  },
  "defaultProps": {
    "tabIndex": {},
    "initialMonth": {},
    "numberOfMonths": {},
    "locale": {},
    "localeUtils": {
      "formatDay": function () {},
      "formatMonthTitle": function () {},
      "formatWeekdayShort": function () {},
      "formatWeekdayLong": function () {},
      "getFirstDayOfWeek": function () {},
      "getMonths": function () {},
      "default": {
        "formatDay": function () {},
        "formatMonthTitle": function () {},
        "formatWeekdayShort": function () {},
        "formatWeekdayLong": function () {},
        "getFirstDayOfWeek": function () {},
        "getMonths": function () {}
      }
    },
    "enableOutsideDays": {},
    "fixedWeeks": {},
    "canChangeMonth": {},
    "reverseMonths": {},
    "pagedNavigation": {},
    "renderDay": function () {},
    "weekdayElement": {
      "$$typeof": {},
      "type": {
        "propTypes": {
          "weekday": {
            "isRequired": function () {}
          },
          "className": {
            "isRequired": function () {}
          },
          "locale": {
            "isRequired": function () {}
          },
          "localeUtils": {
            "isRequired": function () {}
          }
        }
      },
      "key": {},
      "ref": {},
      "props": {},
      "_owner": {}
    },
    "navbarElement": {
      "$$typeof": {},
      "type": {
        "propTypes": {
          "className": {
            "isRequired": function () {}
          },
          "nextMonth": {
            "isRequired": function () {}
          },
          "previousMonth": {
            "isRequired": function () {}
          },
          "showPreviousButton": {
            "isRequired": function () {}
          },
          "showNextButton": {
            "isRequired": function () {}
          },
          "onPreviousClick": {
            "isRequired": function () {}
          },
          "onNextClick": {
            "isRequired": function () {}
          },
          "dir": {
            "isRequired": function () {}
          },
          "locale": {
            "isRequired": function () {}
          },
          "localeUtils": {
            "isRequired": function () {}
          }
        },
        "defaultProps": {
          "className": {},
          "dir": {},
          "showPreviousButton": {},
          "showNextButton": {}
        }
      },
      "key": {},
      "ref": {},
      "props": {
        "className": {},
        "dir": {},
        "showPreviousButton": {},
        "showNextButton": {}
      },
      "_owner": {}
    },
    "captionElement": {
      "$$typeof": {},
      "type": {
        "propTypes": {
          "date": {
            "isRequired": function () {}
          },
          "locale": {
            "isRequired": function () {}
          },
          "localeUtils": {
            "isRequired": function () {}
          },
          "onClick": {
            "isRequired": function () {}
          }
        }
      },
      "key": {},
      "ref": {},
      "props": {},
      "_owner": {}
    }
  },
  "DateUtils": {
    "addDayToRange": function () {},
    "addMonths": function () {},
    "clone": function () {},
    "isSameDay": function () {},
    "isDayInRange": function () {},
    "isDayBetween": function () {},
    "isPastDay": function () {}
  },
  "LocaleUtils": {
    "formatDay": function () {},
    "formatMonthTitle": function () {},
    "formatWeekdayShort": function () {},
    "formatWeekdayLong": function () {},
    "getFirstDayOfWeek": function () {},
    "getMonths": function () {}
  },
  "WeekdayPropTypes": {
    "weekday": {
      "isRequired": function () {}
    },
    "className": {
      "isRequired": function () {}
    },
    "locale": {
      "isRequired": function () {}
    },
    "localeUtils": {
      "isRequired": function () {}
    }
  },
  "NavbarPropTypes": {
    "className": {
      "isRequired": function () {}
    },
    "nextMonth": {
      "isRequired": function () {}
    },
    "previousMonth": {
      "isRequired": function () {}
    },
    "showPreviousButton": {
      "isRequired": function () {}
    },
    "showNextButton": {
      "isRequired": function () {}
    },
    "onPreviousClick": {
      "isRequired": function () {}
    },
    "onNextClick": {
      "isRequired": function () {}
    },
    "dir": {
      "isRequired": function () {}
    },
    "locale": {
      "isRequired": function () {}
    },
    "localeUtils": {
      "isRequired": function () {}
    }
  },
  "PropTypes": {
    "default": {
      "localeUtils": {
        "isRequired": function () {}
      }
    }
  }
};
DayPicker.prototype = {
  "isReactComponent": function () {},
  "setState": function () {},
  "forceUpdate": function () {}
};
/**********************************************************************
 * End Generated Extern for DayPicker
/**********************************************************************/
