'use strict';

const Promise = require('bluebird');
const R = require('ramda');

module.exports = env => {

  const knex = require('./init.js')(env);

  const getParty = (name,cb) => {
    return Promise.props({
      party: knex('party').where('name',name),
      songs: knex('song').where('party_name',name),
    })
    .then(obj => {
      return cb(undefined,{
        party: obj.party[0],
        songs: obj.songs,
      });
    })
    .catch(err => {
      cb(err,undefined);
    });
  };

  return {
    getParty
  };
};
