
const Promise = require('bluebird');
const utils   = require('../services/utils.js');

module.exports = (Hum) => {

  return (req, reply) => {

    Hum.getArtists(req.query.name)
    .then(res => {

      const artistRank = utils.artistsInfo(res.data_response);

      const topSongsQuery = artistRank.map(elm => {

        return Hum.getArtistTopSongs(elm._id);
      }).slice(0,6);

      return Promise.all(topSongsQuery);
    })
    .then(resSongs => {

      const filterSongs = resSongs.filter(Boolean);
      const replyObject = filterSongs.map(elm => {
        return {
          id:     elm.data_response[0].artists[0].uid,
          name:   elm.data_response[0].artists[0].name,
          avatar: elm.data_response[0].artists[0].avatar,
          songs:  utils.getSongs(elm.data_response),
        };
      });

      reply({
        status: 'success',
        data: replyObject
      });
    })
    .catch(err => {

      reply({
        status: 'error',
        error: err,
      });
    });
  };
};
