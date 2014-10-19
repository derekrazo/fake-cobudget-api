var _ = require('lodash');

var orgs = require('./organizations');
var buckets = require('./buckets');

module.exports = {
  1: {
    "id": 1,
    "organization": {
      "id": "/organizations/1",
    },
    "status": "active",
    "buckets": [{
      "id": "/buckets/1",
    }, {
      "id": "/buckets/2",
    }, {
      "id": "/buckets/3",
    }],
  },
};
