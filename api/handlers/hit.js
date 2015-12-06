
module.exports = Knex => {

  return (req, reply) => {

    Knex.addHit(req.payload.id, (err,data) => {
      
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
