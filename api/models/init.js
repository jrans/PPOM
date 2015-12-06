'use strict';

module.exports = env => {

  const connection = require('knex')(
    require('../../knexfile.js')[env]
  );

  return connection;
};
