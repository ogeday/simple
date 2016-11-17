'use strict';

var request = require('supertest');
var app = require('../server');
var test = require('tape');

test('Home page returned', function (t) {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.end();
    });
});
