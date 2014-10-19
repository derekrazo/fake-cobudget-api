// match types with stores
var stores = {
  people: require('./people'),
  organizations: require('./organizations'),
  budgets: require('./budgets'),
  buckets: require('./buckets'),
  projects: require('./projects'),
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
        Object.keys(object).length === 1 &&
        object.id
      ) {
        // update with entity at link
        var link = object;
        // strip leading / from id
        var id = link.id.replace(/^\/|\/$/g, '');
        // get collection id and entity id
        var match = id.split("/");
        var collectionId = match[0];
        var entityId = match[1];
        linkedEntity = stores[collectionId][entityId];
        //console.log("linked entity", linkedEntity);
        this.update(linkedEntity);
      }
    });
  });
});
