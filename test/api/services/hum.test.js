
const path = '../../..';
const test = require('tape');
const hum  = require(path+'/api/services/hum.js')({
  token:  process.env.TOKEN,
  id:     process.env.HUM_ID,
  secret: process.env.HUM_SECRET,
});

test('api:service:hum:getArtist -> get list of artists', t => {

  hum.getArtists('adele')
  .then(res => {
    // console.log('getArtists',JSON.stringify(res));
    t.equal(res.status_response, 'ok', 'request successful');
    t.end();
  })
  .catch(err => {
    t.end(err);
  });
});

test('api:service:hum:getArtistTopSongs -> get artist top songs', t => {

  const artistId = '55118f9df9c816a0d639f3ea'; // adele

  hum.getArtistTopSongs(artistId)
  .then(res => {
    // console.log('getArtistTopSongs',JSON.stringify(res));
    t.equal(res.status_response, 'ok', 'request successful');
    t.end();
  })
  .catch(err => {
    t.end(err);
  });
});
