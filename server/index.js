var express = require('express')
var app = express()
var users = ['John', 'Betty', 'Hal'];

app.get('/', function (req, res) {
  res.send('Hello visitor, use api at <a href="/api/users">/api/users</a>')
});

app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app
