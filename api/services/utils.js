'use strict';

const R = require('ramda');
const youtubeThumbnail = require('youtube-thumbnail');

const artistsInfo = (arrayOfArtists) => {

  const clone = R.clone(arrayOfArtists);

  const fillUpArray = clone.map(elm => {

    if (elm.stats === undefined || elm.stats.playlists === undefined) {
      elm.stats = {
        popularity: 0,
        playlists: 0,
      };
    }

    return elm;
  });

  return clone.sort((a,b) => {
    return b.stats.playlists - a.stats.playlists
  });
}

const getSongs = (arrayOfSongs) => {
  return arrayOfSongs.map(elm => {
    return {    
      id:          elm._id,
      title:       elm.title,
      url:         elm.urls.youtube,
      album_image: youtubeThumbnail(elm.urls.youtube).medium.url,
    }
  }).slice(0,10);
}

module.exports = {
  artistsInfo,
  getSongs,
};
