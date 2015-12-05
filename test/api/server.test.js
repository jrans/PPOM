'use strict';

const path = '../..';

const test = require('tape');
const serverFunction = require(path+'/api/server.js');

test('api:handler:search -> should throw error if no config', t => {

  try {
  	const server = serverFunction();
  } catch (e) {
  	t.pass('throw error');
  	t.end();
  }
});