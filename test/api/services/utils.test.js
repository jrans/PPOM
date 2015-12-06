const path = '../../..';
const test = require('tape');
const utils  = require(path+'/api/services/utils.js');

const utilsTest  = require('../../utils.js');

test('api:utils:artistsInfo -> should return sorted list', t => {

  const mockArray = [
    utilsTest.createArtist({id:'1',playlists:5}),
    utilsTest.createArtist({id:'3',playlists:6}),
    utilsTest.createArtist({id:'5',playlists:9}),
    utilsTest.createArtist({id:'2',playlists:8}),
  ];

  const sortedList = utils.artistsInfo(mockArray);

  t.equal(sortedList[0]._id, '5', 'first most popular one');
  t.end();
});

test('api:utils:artistsInfo -> should return sorted list even if wrong', t => {

  const mockArray = [
    utilsTest.createArtist({id:'1',playlists:5}),
    utilsTest.createArtist({id:'3',playlists:6}),
    {},
    utilsTest.createArtist({id:'2',playlists:8}),
  ];

  const sortedList = utils.artistsInfo(mockArray);

  t.equal(sortedList[0]._id, '2', 'first most popular one');
  t.equal(sortedList[1]._id, '3', 'second most popular one');
  t.end();
});

test('api:utils:getSongs -> should return list of songs', t => {

  const mockArray = [
    {_id:'1',title:'Hello',urls:{youtube:'https://www.youtube.com/watch?v=YQHsXMglC9A'}},
    {_id:'2',title:'Not Afraid',urls:{youtube:'https://www.youtube.com/watch?v=j5-yKhDd64s'}},
  ];

  const sortedList = utils.getSongs(mockArray);

  t.equal(sortedList[0].id, '1', 'got one');
  t.equal(sortedList[1].id, '2', 'got two');
  t.end();
});
