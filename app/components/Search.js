// npm
import React, { Component, PropTypes, View, StyleSheet, Dimensions, TextInput, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
// Components
import TrackResult from './TrackResult.js';

import Video from 'react-native-video';

const {
  height: screenHeight,
  width: screenWidth
} = Dimensions.get('window');


class Search extends Component {

  constructor () {
    super();

    this.state = {
      trackPlaying: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
      searchValue: '',
      searchResults: [{
        artist:"artistartistartistartistartistartist",
        title:   "songsongsongsongsongsong",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      },
      {
        artist:"artistartistartistartistartistartist",
        title:   "songsongsongsongsongsong",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      }
    ]
    }

    this.changeTrack   = this.changeTrack.bind(this);
    this.search        = this.search.bind(this);
    this.createResults = this.createResults.bind(this);
    this.searchTracks  = this.searchTracks.bind(this);
  }

  changeTrack (url) {
    this.setState({
      trackPlaying: url,
    })
  }

  addTrack (song) {
    const playlist = this.props;
    const req = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(song)
    };

    return fetch('http:localhost:9000/song', req)
      .then(response => response.json())
      .then(json => {
        if (json.status === 'success') {
        } else {
          console.log('Login error:',json);
        }
      })
      .catch(error => {
      });
  }

  searchTracks () {

    const req = {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    };

    return fetch('http:localhost:9009/search?name='+this.state.searchValue, req)
      .then(response => response.json())
      .then(json => {
        this.setState({searchResults: json.songs.reduce((results, artist) => {
          artist.songs.reduce((results, song) => {
            return results.concat[{
              party_name:   'test',
              url:          song.url,
              album_image:  song.album_image,
              artist_image: artist.artist_image,
              title:        song.title,
              artist:       artist.name
            }]
          }, results)
        }, [])
        });
      })
      .catch(error => {
      });
  }

  createResults (results) {
    const {
      changeTrack,
      addTrack,
      state : {trackPlaying, searchResults}
    } = this;

    return searchResults.map( (result,i) => <TrackResult
      picture      = {result.album_image}
      name         = {result.artist}
      title        = {result.title}
      url          = {result.url}
      trackPlaying = {trackPlaying}
      changeTrack  = {changeTrack.bind(this,result.url)}
      addTrack     = {addTrack.bind(this,{
        party_name: result.party_name
        url: result.url
        album_image: result.album_image
        artist_image: result.artist_image
        title: result.title
        artist: result.artist
      })}
      key          = {i}
    />)
  }

  search (searchValue) {
    this.setState({searchValue});
  }

  render () {
    const {
      state: {searchValue},
      search,
      createResults,
      searchTracks,
      props: { tabPress, refCreator, buttomTab }
    } = this;

    return (
      <View style = {styles.container}>
        <TouchableOpacity onPress={tabPress} style= {styles.searchBar}>
          <TextInput
            style         = { styles.searchInput }
            placeholder   = "Search by track, artist, keyword ... "
            placeholderTextColor = 'black'
            onChangeText  = { search }
            value         = { searchValue }
            onFocus       = { () => !buttomTab && tabPress() }
            ref           = { refCreator('searchInput')}
          />
          <View  style={{width: 10}}/>
          <TouchableOpacity
            style = {styles.iconContainer}
            onPress = {searchTracks}
          >
            <Image source={require('../images/search.png')} style={styles.searchIcon} resizeMode={'contain'}/>
          </TouchableOpacity>
        </TouchableOpacity>
        <ScrollView
          ref                              = {component=>this._funkyScrollView=component}
          automaticallyAdjustContentInsets = {false}
          scrollsToTop                     = {false}
          scrollEnabled                    = {true}
          style                            = {styles.trackScroll}
          scrollEventThrottle              = {16}
          contentContainerStyle            = {styles.scrollContent}
        >
          {createResults()}
        </ScrollView>
        <View style={styles.bottomBar}>
        </View>
      </View>
    );
  }
}


/**

**/
// onScroll  =   { (event) => this.setState({scrollPosition:event.nativeEvent.contentOffset.y})}

Search.propTypes = {
  changePage:  PropTypes.func,
  changeState: PropTypes.func,
  state:       PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:   'column',
    justifyContent:  'space-between',
  },
    video: {
      height:0,
      width: 0
    },
    searchBar: {
      height: 100,
      backgroundColor: 'black',
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
      searchInput: {
        color: 'black',
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        borderRadius: 15,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        paddingLeft: 15,
        height: 50,
        alignSelf: 'center',
      },
      iconContainer: {
        backgroundColor: 'white',
        width: 36,
        height: 36,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
      },
        searchIcon: {
          width: 20,
          height: 20,
        },
    trackScroll: {
      height: 100,
      backgroundColor: 'white'
    },
      scrollContent: {
        flexDirection: 'column',
        alignItems:    'stretch'
      },
    bottomBar: {
      height:60
    }
})

export default Search;
