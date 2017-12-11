define({ "api": [  {    "type": "get",    "url": "http://api.aladhan.com/gToH",    "title": "Convert a Gregorian date to a Hijri date",    "name": "GetGToH",    "description": "<p>Convert a Gregorian date to a Hijri date</p>",    "group": "IslamicCalendar",    "version": "1.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "date",            "description": "<p>A gregorian date formatted as DD-MM-YYYY</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "http://api.aladhan.com/gToH?date=07-12-2014",        "type": "http"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    {\n        code: 200,\n        status: \"OK\",\n        data: {\n            hijri: {\n                date: \"14-02-1436\",\n                format: \"DD-MM-YYYY\",\n                day: \"14\",\n                month: {\n                    number: 2,\n                    en: \"Ṣafar\",\n                    ar: \"صَفَر\"\n                },\n                year: \"1436\",\n                designation: {\n                    abbreviated: \"AH\",\n                    expanded: \"Anno Hegirae\"\n                }\n            },\n            gregorian: {\n                date: \"07-12-2014\",\n                format: \"DD-MM-YYYY\",\n                day: \"07\",\n                month: {\n                    number: 12,\n                    en: \"December\"\n                },\n                year: \"2014\",\n                designation: {\n                    abbreviated: \"AD\",\n                    expanded: \"Anno Domini\"\n                }\n            }\n        }\n    }\n}",          "type": "json"        }      ]    },    "filename": "routes/hijri/hijriCalendar.php",    "groupTitle": "IslamicCalendar"  },  {    "type": "get",    "url": "http://api.aladhan.com/gToHCalendar/:month/:year",    "title": "Request a Hijri Calendar for a Gregorian month",    "name": "GetGToHCalendar",    "description": "<p>Request a Hijri Calendar for a Gregorian month</p>",    "group": "IslamicCalendar",    "version": "1.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "number",            "size": "1-12",            "optional": false,            "field": "month",            "description": "<p>A gregorian month. 1 = January and 12 = December.</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "year",            "description": "<p>A gregorian year. Example: 2015</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "http://api.aladhan.com/gToHCalendar/8/2016",        "type": "http"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    code: 200,\n    status: \"OK\",\n    data: [\n    {\n        gregorian: {\n            date: \"01-12-2578\",\n            format: \"DD-MM-YYYY\",\n            day: \"01\",\n            weekday: {\n                en: \"Tuesday\"\n            },\n            month: {\n                number: 12,\n                en: \"December\"\n            },\n            year: \"2578\",\n            designation: {\n                abbreviated: \"AD\",\n                expanded: \"Anno Domini\"\n            }\n        },\n        hijri: {\n            date: \"01-06-2017\",\n            format: \"DD-MM-YYYY\",\n            day: \"01\",\n            weekday: {\n                en: \"Al Thalaata\",\n                ar: \"الثلاثاء\"\n            },\n            month: {\n                number: 6,\n                en: \"Jumādá al-ākhirah\",\n                ar: \"جُمادى الآخرة\"\n            },\n            year: \"2017\",\n            designation: {\n                abbreviated: \"AH\",\n                expanded: \"Anno Hegirae\"\n            },\n            holidays: [ ]\n        }\n    },\n\n    ...  more days\n\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/hijri/hijriCalendar.php",    "groupTitle": "IslamicCalendar"  },  {    "type": "get",    "url": "http://api.aladhan.com/hToG",    "title": "Convert a Hijri date to a Gregorian date",    "name": "GetHToG",    "description": "<p>Convert a Hijri date to a Gregorian date</p>",    "group": "IslamicCalendar",    "version": "1.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "date",            "description": "<p>A hijri date formatted as DD-MM-YYYY</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "http://api.aladhan.com/gToH?date=14-02-1436",        "type": "http"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    {\n        code: 200,\n        status: \"OK\",\n        data: {\n            hijri: {\n                date: \"14-02-1436\",\n                format: \"DD-MM-YYYY\",\n                day: \"14\",\n                month: {\n                    number: 2,\n                    en: \"Ṣafar\",\n                    ar: \"صَفَر\"\n                },\n                year: \"1436\",\n                designation: {\n                    abbreviated: \"AH\",\n                    expanded: \"Anno Hegirae\"\n                }\n            },\n            gregorian: {\n                date: \"07-12-2014\",\n                format: \"DD-MM-YYYY\",\n                day: \"07\",\n                month: {\n                    number: 12,\n                    en: \"December\"\n                },\n                year: \"2014\",\n                designation: {\n                    abbreviated: \"AD\",\n                    expanded: \"Anno Domini\"\n                }\n            }\n        }\n    }\n}",          "type": "json"        }      ]    },    "filename": "routes/hijri/hijriCalendar.php",    "groupTitle": "IslamicCalendar"  },  {    "type": "get",    "url": "http://api.aladhan.com/hToGCalendar/:month/:year",    "title": "Request a Gregoran Calendar for a Hijri month",    "name": "GetHToGCalendar",    "description": "<p>Request a Gregoran Calendar for a Hijri month</p>",    "group": "IslamicCalendar",    "version": "1.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "number",            "size": "1-12",            "optional": false,            "field": "month",            "description": "<p>A Hijri month. 1 = Muharram and 12 = Dhu al Hijjah.</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "year",            "description": "<p>A hijri year. Example: 1437</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "http://api.aladhan.com/gToHCalendar/3/1438",        "type": "http"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n    code: 200,\n    status: \"OK\",\n    data: [\n    {\n        gregorian: {\n            date: \"01-12-2578\",\n            format: \"DD-MM-YYYY\",\n            day: \"01\",\n            weekday: {\n                en: \"Tuesday\"\n            },\n            month: {\n                number: 12,\n                en: \"December\"\n            },\n            year: \"2578\",\n            designation: {\n                abbreviated: \"AD\",\n                expanded: \"Anno Domini\"\n            }\n        },\n        hijri: {\n            date: \"01-06-2017\",\n            format: \"DD-MM-YYYY\",\n            day: \"01\",\n            weekday: {\n                en: \"Al Thalaata\",\n                ar: \"الثلاثاء\"\n            },\n            month: {\n                number: 6,\n                en: \"Jumādá al-ākhirah\",\n                ar: \"جُمادى الآخرة\"\n            },\n            year: \"2017\",\n            designation: {\n                abbreviated: \"AH\",\n                expanded: \"Anno Hegirae\"\n            },\n            holidays: [ ]\n        }\n    },\n\n    ...  more days\n\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/hijri/hijriCalendar.php",    "groupTitle": "IslamicCalendar"  }] });
