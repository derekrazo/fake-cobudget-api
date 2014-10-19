var express = require('express');
var cors = require('cors');
var _ = require('lodash');

var app = express();

var corsOptions = {
  origin: 'http://127.0.0.1:9000',
  credentials: true
};

// get data
var data = require('./data');

// for store of data
data.forEach(function (store, name) {
  //console.log(type, "store", store);

  // setup store.find()
  var findRoute = '/' + name;
  //console.log(type + ".find() route", findRoute);
  app.get(findRoute, function (req, res) {
    res.send(store.values().value());
  });

  // setup store.get(id)
  var getRoute = findRoute + '/:id';
  //console.log(type + ".get() route", getRoute);
  app.get(getRoute, function (req, res) {
    res.send(store.value()[req.params.id]);
  });
});

app.listen(3000);
console.log('Listening on port 3000...');
