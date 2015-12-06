
const utils = require('../services/utils.js');

module.exports = Knex => {

  return (req, reply) => {

    Knex.getParty(req.query.name, (err,data) => {

      if (err) {
        return reply({
          status: 'error',
          error: err,
        });
      }

      return reply({
        status: 'success',
        data,
      });
    });
  };
};
