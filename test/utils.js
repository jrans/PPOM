
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
    id: o.id || uuid.v4(),
    artist: 'Adele',
    title: 'Hello',
    artist_image: 'https://i.ytimg.com/i/Rw0x9_EfawqmgDI2IgQLLg/mq1.jpg',
    album_image: 'http://img.youtube.com/vi/YQHsXMglC9A/mqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=YQHsXMglC9A',
    hits: o.hits || Math.floor((Math.random() * 99) + 100),
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
