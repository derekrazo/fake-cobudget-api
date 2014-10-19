// match types with stores
var stores = {
  Person: require('./people'),
  Organization: require('./organizations'),
  Budget: require('./budgets'),
  Bucket: require('./buckets'),
  Project: require('./projects'),
};

// populate nested stores
var _ = require('lodash');
var traverse = require('traverse');

module.exports =
// for each type of store
_(stores).mapValues(function (store, type) {
  // get all the entities at the store
  return _(store).mapValues(function (entity, key) {
    // pre-process the entity
    return traverse(entity).map(function (object) {
      // if link to other entity
      if (
        object &&
        typeof object === 'object' &&
        Object.keys(object).length === 2 &&
        object.id && object.type
      ) {
        // update with entity at link
        var link = object;
        //console.log("link", link);
        linkedEntity = stores[link.type][link.id];
        //console.log("linked entity", linkedEntity);
        this.update(linkedEntity);
      }
    });
  });
});
