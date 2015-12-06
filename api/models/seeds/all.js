
'use strict';

const utils = require('../../../test/utils.js');

exports.seed = function(knex, Promise) {

  const party_1 = utils.createParty({name:'test'});
  const party_2 = utils.createParty({});

  const songs = [
    utils.createSong({name:party_1.name}),
    utils.createSong({name:party_1.name}),
    utils.createSong({name:party_1.name}),
    utils.createSong({name:party_2.name}),
    utils.createSong({name:party_2.name}),
  ];

  return knex('party').del()
  .then(function () {
    return Promise.all([
      knex('party').insert(party_1),
      knex('party').insert(party_2),
    ]);
  })
  .then(function () {
    return knex('song').insert(songs);
  })
  .catch(function (err) {
    console.log('kenx error', err);
  })
}
