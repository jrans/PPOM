
const utils = require('../services/utils.js');

module.exports = Knex => {

  return (req, reply) => {

    Knex.slice(req.payload.id, (err, data) => {

      if (err) {
        return reply({
          status: 'error',
          error: err,
        });
      }

      return reply({
        status: 'success',
        data: data[0],
      });
    });
  };
};
