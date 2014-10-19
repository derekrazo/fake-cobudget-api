var projects = require('./projects');

module.exports = {
  1 : {
    "id": 1,
    "project": projects[1],
    "min": 200,
    "target": 500,
    "max": 1000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.40,
    "sponsor" : {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "name": "Craig"
        },
      },
    ],
  },
  2 : {
    "id": 2,
    "project": projects[2],
    "min": 0,
    "target": 1000,
    "max": 2000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.20,
    "sponsor": {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "name": "Craig"
        },
      },
    ],
  },
  3 : {
    "id": 3,
    "project": projects[3],
    "min": 200,
    "target": 1000,
    "max": 1000,
    "current": 600,
    "currency": "NZD",
    "ratio_funded" : 0.60,
    "sponsor": {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 600,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "name": "Craig"
        },
      },
    ],
  },
};
