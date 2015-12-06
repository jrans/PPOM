'use strict';

const path = '../../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');

test('api:handler:stream -> missing query', t => {

  const server = serverFunction({
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  server.inject({
    method: 'GET',
    url: '/song',
  }, res => {

    t.equal(res.statusCode, 400, 'got 400 status code');
    t.end();
  });
});

// test('api:handler:stream -> should return stream of data', t => {

//   const server = serverFunction({
//     humId: process.env.HUM_ID,
//     humSecret: process.env.HUM_SECRET,
//     humToken: process.env.TOKEN,
//   });

//   server.inject({
//     method: 'GET',
//     url: '/song?youtube=https://youtube.com/watch?v=-yL7VP4-kP4',
//   }, res => {

//     t.equal(res.statusCode, 400, 'got 400 status code');
//     t.end();
//   });
// });
