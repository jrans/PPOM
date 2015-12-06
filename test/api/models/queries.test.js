'use strict';

const path = '../../..';

const test = require('tape');
const knex = require(path+'/api/models/init.js')('test');
const queries = require(path+'/api/models/queries.js')('test');

const utils = require('../../utils.js');
const uuid = require('node-uuid');

test('api:models:queries:getParty -> ', t => {

  queries.getParty('test', (err,data) => {

    t.equal(data.party.name,'test','got right party test');
    t.equal(data.songs.length,3,'got right party songs');
    t.end();
  });
});

test('api:models:queries:addHit -> should add one hit', t => {

  const mockId = uuid.v4();
  const songMock = utils.createSong({name:'test',id:mockId,hits:100});

  knex('song').insert(songMock,'*').asCallback((err,data) => {

    if (err) {
      return t.end(err);
    }

    queries.addHit(mockId, (err,data) => {

      t.equal(data[0].hits,101,'added one hits');
      t.end();
    });
  });
});

test('api:models:queries:slice -> should slice one song', t => {

  const mockId = uuid.v4();
  const songMock = utils.createSong({name:'test',id:mockId,hits:100});

  knex('song').insert(songMock,'*').asCallback((err,data) => {

    if (err) {
      return t.end(err);
    }

    queries.slice(mockId, (err,data) => {

      t.ok(data[0].type,'playlist','added one playlist');
      t.end();
    });
  });
});
