var projects = require('./projects');

module.exports = {
  1 : {
    "id": 1,
    "project": {
      "id": "projects/1",
    },
    "min": 200,
    "target": 500,
    "max": 1000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.40,
    "sponsor" : {
      "id": "/people/2",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": "/people/1",
        },
      },
    ],
  },
  2 : {
    "id": 2,
    "project": {
      "id": "/projects/2",
    },
    "min": 0,
    "target": 1000,
    "max": 2000,
    "currency": "NZD",
    "current": 200,
    "ratio_funded" : 0.20,
    "sponsor": {
      "id": "/people/2",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "allocator": {
          "id": "/people/1",
        },
      },
    ],
  },
  3 : {
    "id": 3,
    "project": {
      "id": "/projects/3",
    },
    "min": 200,
    "target": 1000,
    "max": 1000,
    "current": 600,
    "currency": "NZD",
    "ratio_funded" : 0.60,
    "sponsor": {
      "id": "/people/2",
    },
    "allocations": [
      {
        "amount": 600,
        "currency": "NZD",
        "allocator": {
          "id": "/people/1",
        },
      },
    ],
  },
};
