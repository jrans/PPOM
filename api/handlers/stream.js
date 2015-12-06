
const Promise = require('bluebird');
const utils   = require('../services/utils.js');

const youtubeStream = require('youtube-audio-stream');

module.exports = (Hum) => {

  return (req, reply) => {

    try {

      reply(youtubeStream(req.query.youtube));
    } catch (exception) {

      return reply({
        status: 'error',
        error: exception,
      });
    }
  };
};
