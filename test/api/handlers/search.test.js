'use strict';

const path = '../../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');

test('api:handler:search -> should return error if no query', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });
  
  server.inject({
    method: 'GET',
    url: '/search',
  }, res => {

    t.equal(res.statusCode, 400, 'got 400 status code');
    t.end();
  });
});

test('api:handler:search -> should return data object', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  server.inject({
    method: 'GET',
    url: '/search?name=adele',
  }, res => {

    const PAYLOAD = JSON.parse(res.payload);
    t.equal(PAYLOAD.status, 'success', 'got success status');
    t.ok(PAYLOAD.data, 'got data');
    t.end();
  });
});
