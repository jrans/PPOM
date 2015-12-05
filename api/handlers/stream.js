
const Promise = require('bluebird');
const utils   = require('../services/utils.js');

const youtubeStream = require('youtube-audio-stream');

module.exports = (Hum) => {

  return (req, reply) => {

    const requestUrl = 'youtube.com/watch?v=-yL7VP4-kP4';

    try {
      reply(youtubeStream(requestUrl));;
    } catch (exception) {

      return reply({
        status: 'error',
        error: exception,
      });
    }
  };
};
