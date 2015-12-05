
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

module.exports = {
  createArtist
};
