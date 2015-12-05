
const Joi = require('joi');

module.exports = (o) => {

  const search = require('./handlers/search.js')(o.Hum);

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
    }
  ];
};
