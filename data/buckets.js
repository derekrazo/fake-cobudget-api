var projects = require('./projects');

module.exports = {
  1 : {
    "id": 1,
    "project": projects[1],
    "created_at": "2014-09-10T23:32:12.147Z",
    "min": 200,
    "target": 500,
    "max": 1000,
    "currency": "NZD",
    "current": 200,
    "percentage_funded" : 40,
    "sponsor" : {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "created_at": "2014-09-10T23:50:27.486Z",
        "updated_at": "2014-09-10T23:54:27.665Z",
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
    "created_at": "2014-09-10T23:32:12.147Z",
    "min": 0,
    "target": 1000,
    "max": 2000,
    "currency": "NZD",
    "current": 200,
    "percentage_funded" : 20,
    "sponsor": {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 200,
        "currency": "NZD",
        "created_at": "2014-09-10T23:50:27.486Z",
        "updated_at": "2014-09-10T23:54:27.665Z",
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
    "created_at": "2014-09-10T23:32:12.147Z",
    "min": 200,
    "target": 1000,
    "max": 1000,
    "current": 600,
    "currency": "NZD",
    "percentage_funded" : 60,
    "sponsor": {
      "id": 2,
      "name": "Derek Razo",
    },
    "allocations": [
      {
        "amount": 600,
        "currency": "NZD",
        "created_at": "2014-09-10T23:50:27.486Z",
        "updated_at": "2014-09-10T23:54:27.665Z",
        "allocator": {
          "id": 1,
          "name": "Craig"
        },
      },
    ],
  },
};
