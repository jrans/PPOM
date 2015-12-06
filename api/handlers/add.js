
module.exports = Knex => {

  return (req, reply) => {

    Knex.addSong(req.payload, (err,data) => {
      
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
