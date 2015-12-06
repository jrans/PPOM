
const uuid = require('node-uuid');

function createArtist (o) {

  const random = Math.floor(Math.random() * 1000000000);

  return {
    _id: o.id || random.toString(),
    urls: {
      youtube: 'youtube.com/' + random,
    },
    score: random,
    stats: {
      popularity: random,
      playlists:  o.playlists
    },
    account: {
      avatar: 'avatar-' + random,
      bio:    'bio-' + random,
      name: {
        first:   'first-' + random,
        hashtag: '#' + random,
      }
    }
  };
}

function createSong (o) {

  const random = Math.floor(Math.random() * 1000000000);

  return {
    id: uuid.v4(),
    artist: 'artist-' + random,
    title: 'title-' + random,
    artist_image: 'artist-image-' + random,
    album_image: 'album-image-' + random,
    url: 'url-' + random,
    hits: Math.floor((Math.random() * 99) + 100),
    type: ['suggestion','playlist'][0],
    party_name: o.name,
  };
}

function createParty (o) {

  const random = Math.floor(Math.random() * 1000000000);

  return {
    name: o.name || 'name-' + random,
  };
}

module.exports = {
  createArtist,
  createParty,
  createSong,
};
