
const Joi = require('joi');

module.exports = (o) => {

  const search    = require('./handlers/search.js')(o.Hum);
  const streamMp3 = require('./handlers/stream.js')(o.Hum);
  const getParty  = require('./handlers/party.js')(o.Knex);
  const addHit    = require('./handlers/hit.js')(o.Knex);
  const addSong   = require('./handlers/add.js')(o.Knex);

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
    },
    {
      method: 'POST',
      path: '/song',
      config: {
        validate: {
          payload: {
            party_name:   Joi.string().required(),
            url:          Joi.string().required(),
            album_image:  Joi.string().required(),
            artist_image: Joi.string().required(),
            title:        Joi.string().required(),
            artist:       Joi.string().required(),
          },
        },
      },
      handler: addSong,
    },
  ];
};
