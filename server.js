var express = require('express');
var cors = require('cors');
var _ = require('lodash');

var app = express();

var corsOptions = {
  origin: 'http://127.0.0.1:9000',
  credentials: true
};

// get data
var budgets = require('./data/budgets');
var buckets = require('./data/buckets');
var organizations = require('./data/organizations');

app.use(cors());

app.get('/organizations', cors(corsOptions), function (req, res) {
  res.send(_.values(organizations));
});

app.get('/organizations/:id', cors(corsOptions), function (req, res) {
  res.send(organizations[req.params.id]);
});

app.get('/budgets', cors(corsOptions), function (req, res) {
  res.send(_.values(budgets));
});

app.get('/budgets/:id', cors(corsOptions), function (req, res) {
  res.send(budgets[req.params.id])
});

app.get('/buckets', cors(corsOptions), function (req, res) {
  res.send(_.values(buckets));
});

app.get('/buckets/:id', cors(corsOptions), function (req, res) {
  res.send(buckets[req.params.id]);
});

app.listen(3000);
console.log('Listening on port 3000...');
