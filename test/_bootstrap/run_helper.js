

const test = require('tape');
const utils = require('../utils.js');

const knex = require('../../api/models/init.js')('test');

module.exports = {
  postgresRunSeed: function () {

    test('setting: create database', function (t) {

      knex.migrate.latest()
      .then(function () {
        return knex.seed.run();
      })
      .then(function () {
        t.end();
      })
      .catch(function () {
        console.log('DATA BASE FAIL', arguments);
        t.fail();
      });
    });
  },
  end: function () {
    test('setting: terminate tests', function (t) {
      
      t.end();
      console.log('It took ', process.uptime(), 's to run the tests' );
      process.exit();
    });
  }
}
