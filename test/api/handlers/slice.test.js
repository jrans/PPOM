'use strict';

const path = '../../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');
const knex = require(path+'/api/models/init.js')('test');

const utils = require('../../utils.js');
const uuid = require('node-uuid');

test('api:handler:slice -> should return error if no payload', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  server.inject({
    method: 'POST',
    url: '/slice',
  }, res => {

    t.equal(res.statusCode, 400, 'got 400 status code');
    t.end();
  });
});

test('api:handler:slice -> should return new playlist song', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  const mockId = uuid.v4();
  const songMock = utils.createSong({name:'test',id:mockId,hits:100});

  knex('song').insert(songMock,'*').asCallback((err,data) => {

    if (err) {
      return t.end(err);
    }

    server.inject({
      method: 'POST',
      url: '/slice',
      payload: {
        id: mockId
      }
    }, res => {

      const PAYLOAD = JSON.parse(res.payload);
      t.equal(res.statusCode, 200, 'got 200 status code');
      t.equal(PAYLOAD.data.party_name, 'test', 'got test party');
      t.end();
    });
  });
});
