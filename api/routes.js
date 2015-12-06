
const Joi = require('joi');

module.exports = (o) => {

  const search    = require('./handlers/search.js')(o.Hum);
  const streamMp3 = require('./handlers/stream.js')(o.Hum);
  const getParty  = require('./handlers/party.js')(o.Knex);
  const addHit    = require('./handlers/hit.js')(o.Knex);

  return [
    {
      method: 'GET',
      path: '/search',
      config: {
        validate: {
          query: {
            name: Joi.string().required(),
          }
        }
      },
      handler: search,
    },
    {
      method: 'GET',
      path: '/song',
      config: {
        validate: {
          query: {
            youtube: Joi.string().required()
          },
        },
      },
      handler: streamMp3,
    },
    {
      method: 'GET',
      path: '/party',
      config: {
        validate: {
          query: {
            name: Joi.string().required(),
          },
        },
      },
      handler: getParty,
    },
    {
      method: 'POST',
      path: '/hit',
      config: {
        validate: {
          payload: {
            id: Joi.string().required(),
          },
        },
      },
      handler: addHit,
    }
  ];
};
