var projects = require('./projects');

module.exports = {
  1 : {
    "id": 1,
    "project": {
      "id": 1,
      "type": "Project",
    },
    "min": 200,
    "target": 500,
    "max": 1000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.40,
    "sponsor" : {
      "id": 2,
      "type": "Person",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "type": "Person",
        },
      },
    ],
  },
  2 : {
    "id": 2,
    "project": {
      "id": 2,
      "type": "Project",
    },
    "min": 0,
    "target": 1000,
    "max": 2000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.20,
    "sponsor": {
      "id": 2,
      "type": "Person",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "type": "Person",
        },
      },
    ],
  },
  3 : {
    "id": 3,
    "project": {
      "id": 3,
      "type": "Project",
    },
    "min": 200,
    "target": 1000,
    "max": 1000,
    "current": 600,
    "currency": "NZD",
    "ratio_funded" : 0.60,
    "sponsor": {
      "id": 2,
      "type": "Person",
    },
    "allocations": [
      {
        "amount": 600,
        "currency": "NZD",
        "allocator": {
          "id": 1,
          "type": "Person",
        },
      },
    ],
  },
};
