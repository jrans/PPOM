'use strict';

const request = require('request-promise');

module.exports = function (conf) {

  const HUM_ID     = conf.id;
  const HUM_SECRET = conf.secret;
  const TOKEN      = conf.token;


  /**
   * Get list of artists with the supplied name
   * @param  {Sring} name artists
   * @return {Object/Promise}
   *
    {
      status_response: @String,
      data_response: [
        {
          _id:   @String,
          urls: {
            youtube:       @String,
            official_url:  @String,
            lastfm_url:    @String,
            twitter_url:   @String,
            myspace_url:   @String,
            wikipedia_url: @String,
            mb_url:        @String,
            echonest_id:   @String,
            spotify_url:   @String,
          }
          score: @Number,
          stats: {
            popularity: @Number,
            playlists:  @Number,
          },
          account: {
            avatar: @String,
            bio:    @String,
            name: {
              first:   @String,
              hashtag: @String,
            }
          }
        } 
      ]
    }
   */
  const getArtists = (name) => {

    const opts = {
      json: true,
      method: 'GET',
      headers: { 'X-Mashape-Key': 'W4wDmZXqa7mshCKkVuZDVXUyXZidp1R33oWjsnL5a2wvTmUAWX' },
      uri: 'https://' + HUM_ID + ':' + HUM_SECRET + '@humm-api.p.mashape.com/artists?auth=' + TOKEN + '&keyword=' + name,
    };

    return request(opts);
  };


  /**
   * Get list of songs.
   * @param {String} artistId
   *
    {
      status_response: @String,
      data_response: [
        {
          _id:   @String,
          title: @String,
          urls: {
            youtube: @String,
          },
          foreign_ids: {
            youtube: @String,
          },
          stats: {
            popularity: @String,
            playlists:  @Number,
          },
          type: @String,
          artists: [
            {
              uid:    @String,
              name:   @String,
              avatar: @String,
            }
          ],
          playlists: [
            {
              pid:      @String,
              title:    @String,
              position: @Number
            }
          ]
        }
      ]
    }
   */
  const getArtistTopSongs = (artistId) => {

    const opts = {
      json: true,
      method: 'GET',
      headers: { 'X-Mashape-Key': 'W4wDmZXqa7mshCKkVuZDVXUyXZidp1R33oWjsnL5a2wvTmUAWX' },
      uri: 'https://' + HUM_ID + ':' + HUM_SECRET + '@humm-api.p.mashape.com/artists/' + artistId + '/topsongs',
    };

    return request(opts);
  };

  return {
    getArtists,
    getArtistTopSongs,
  };
}
