// npm
import React, { Component, PropTypes, View, StyleSheet, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
// Components
import TrackResult from './TrackResult.js';

import Video from 'react-native-video';


class Search extends Component {

  constructor () {
    super();

    this.state = {
      trackPlaying: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
      searchValue: '',
      searchResults: [{
        artist:"horse",
        title:   "my lovely horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      }]
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
      body: JSON.stringify({ playlist, song })
    };

    return fetch('http:localhost:9000/suggest', req)
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

  searchTracks (searchValue) {

    const req = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ searchValue: this.state.searchValue })
    };

    return fetch('http:localhost:9000/search', req)
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

  createResults (results) {
    const {
      changeTrack,
      addTrack,
      state : {trackPlaying, searchResults}
    } = this;

    return searchResults.map( (result,i) => <TrackResult
      {...result}
      trackPlaying = {trackPlaying}
      changeTrack  = {changeTrack.bind(this,result.url)}
      addTrack     = {addTrack.bind(this,result.uri)}
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
      searchTracks
    } = this;

    return (
      <View style = {styles.container}>
        <View style= {styles.searchBar}>
          <TextInput
            style         = { styles.searchInput }
            placeholder   = "search by track, artist, keyword"
            onChangeText  = { search }
            value         = { searchValue }
          />
          <TouchableOpacity
            style = {styles.searchBar}
            onPress = {searchTracks}
          />
        </View>
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
    backgroundColor: 'red',
    flexDirection:   'column',
    justifyContent:  'space-between',
  },
    video: {
      height:0,
      width: 0
    },
    searchBar: {
      height: 30,
      backgroundColor: 'blue',
      flexDirection: 'row',
      paddingHorizontal: 20
    },
      searchInput: {
        flex: 1,
        backgroundColor: 'yellow',
        paddingHorizontal: 10
      },
    trackScroll: {
      height: 100,
      backgroundColor: 'orange'
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
