function _throw (mess) {
  throw 'Error while initialization: ' + mess;
}

module.exports = (injectConfig) => {

  // config
  var config = injectConfig !== undefined ? injectConfig : _throw('Missing config object');
  var Mongo  = config.mongo !== undefined ? config.mongo : {};

  var Hapi   = require('hapi');
  var server = new Hapi.Server({
    connections:{
      query: {
        qs: {
          plainObjects: true,
          allowDots: true
        }
      }
    }
  });

  server.connection({
    port: Number(process.env.PORT) || 9009
  });

  /**
   * Hapi logging options. For more docs check:
   * https://github.com/hapijs/good/blob/master/API.md
   *
   * @type {Object}
   */
  var options = {
    opsInterval: 15000,
    requestPayload: true,
    responsePayload: true,
    reporters: [
      {
        reporter: require('good-console'),
        events: {
          log: '*',
          request: '*',
          response: '*',
          ops: '*',
          error: '*',
        }
      }
    ]
  };

  server.register(
    [
      {
        register: require('good'),
        options: config.logger ? options : {}
      }
    ],
    (err) => {

      if (err) {
        return console.log('Err server', err);
      }

      server.route(require('./routes.js')({
        Mongo: Mongo
      }));
    }
  );

  return server;
};
