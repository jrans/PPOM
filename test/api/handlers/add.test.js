'use strict';

const path = '../../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');
const knex = require(path+'/api/models/init.js')('test');

const utils = require('../../utils.js');
const uuid = require('node-uuid');

test('api:handler:add -> should return error if no payload', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  server.inject({
    method: 'POST',
    url: '/song',
  }, res => {

    t.equal(res.statusCode, 400, 'got 400 status code');
    t.end();
  });
});

test('api:handler:add -> should return object created', t => {

  const server = serverFunction({
    env: 'test',
    humId: process.env.HUM_ID,
    humSecret: process.env.HUM_SECRET,
    humToken: process.env.TOKEN,
  });

  server.inject({
    method: 'POST',
    url: '/song',
    payload: {
      party_name:   'test',
      url:          'url',
      album_image:  'album_image',
      artist_image: 'artist_image',
      title:        'title',
      artist:       'artist',
    }
  }, res => {

    const PAYLOAD = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'got 200 status code');
    t.equal(PAYLOAD.status,'success','got success status');
    t.equal(PAYLOAD.data.party_name,'test','got right party name');
    t.end();
  });
});
