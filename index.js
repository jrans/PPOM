'use strict';

var server = require('./api/server.js')({
  env: process.env.NODE_ENV || 'test',
  humId: process.env.HUM_ID,
  humSecret: process.env.HUM_SECRET,
  logger: true,
});

server.start(function () {

  console.log('Server running with -> \n PORT:%d\n NODE_ENV:%s\n', server.info.port, process.env.NODE_ENV);
});
