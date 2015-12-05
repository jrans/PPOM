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
