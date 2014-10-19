var _ = require('lodash');

var orgs = require('./organizations');
var buckets = require('./buckets');

module.exports = {
  1: {
    "id": 1,
    "organization": orgs[1],
    "buckets": _.at(buckets, 1, 2, 3),
  },
};
