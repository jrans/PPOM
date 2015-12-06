// npm
import React, { Component, PropTypes, View, StyleSheet, TextInput, ScrollView } from 'react-native';
// Components
import TrackResult from './TrackResult.js';

class Search extends Component {

  constructor () {
    super();

    this.state = {
      duration: undefined,
      time: undefined,
      playing: ''
    }

    this.setDuration = this.setDuration.bind(this);
    this.setTime     = this.setTime.bind(this);
    this.play = () => {};
  }

  setDuration (duration) {
    this.setState({duration})
  }

  setTime (time) {
    this.setState({time})
  }

  render () {
    const {
      props: {changeState, state},
      setTime,
      setDuration,
      play
    } = this;

    return (
      <View style = {styles.container}>
        <View style= {styles.searchBar}>
          <TextInput
            style         = { styles.searchInput }
            placeholder   = "search by track, artist, keyword"
            onChangeText  = { (value) => changeState({search:value}) }
            value         = { state.search }
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
          <TrackResult
            artist  = "horse"
            title   = "my lovely horse"
            url     = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
            picture = "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png"
            play    = {play}
            setTime = {setTime}
            onEnd   = {setDuration}
          />
        </ScrollView>
        <View style={styles.bottomBar}>
        </View>
      </View>
    );
  }
}

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
