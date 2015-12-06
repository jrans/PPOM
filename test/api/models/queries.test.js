'use strict';

const path = '../../..';

const test = require('tape');
const queries = require(path+'/api/models/queries.js')('test');

test('api:models:queries:getParty -> ', t => {

  queries.getParty('test', (err,data) => {

    t.equal(data.party.name,'test','got right party test');
    t.equal(data.songs.length,3,'got right party songs');
    t.end();
  });
});
