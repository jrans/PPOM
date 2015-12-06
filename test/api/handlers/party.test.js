'use strict';

const path = '../../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');

test('api:handler:party -> should return error if no param', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });
  
  server.inject({
    method: 'GET',
    url: '/party',
  }, res => {

    t.equal(res.statusCode, 400, 'got 400 status code');
    t.end();
  });
});
