var _ = require('lodash');

var orgs = require('./organizations');
var buckets = require('./buckets');

module.exports = {
  1: {
    "id": 1,
    "organization": {
      "id": 1,
      "type": "Organization",
    },
    "status": "active",
    "buckets": [{
      "id": 1,
      "type": "Bucket",
    }, {
      "id": 2,
      "type": "Bucket",
    }, {
      "id": 3,
      "type": "Bucket",
    }],
  },
};
