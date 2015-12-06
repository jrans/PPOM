// npm
import React, { Component, PropTypes, View, StyleSheet, TextInput, ScrollView } from 'react-native';
// Components
import TrackResult from './TrackResult.js';

class Home extends Component {

  render () {
    const {
      props: {changeState, state}
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
          ref={component=>this._funkyScrollView=component}
          automaticallyAdjustContentInsets = {false}
          scrollsToTop                     = {false}
          scrollEnabled                    = {true}
          style                            = {styles.trackScroll}
          scrollEventThrottle              = {16}
          contentContainerStyle            = {styles.scrollContent}
        >
          <TrackResult />
        </ScrollView>
        <View style={styles.bottomBar}>
        </View>
      </View>
    );
  }
}

// onScroll  =   { (event) => this.setState({scrollPosition:event.nativeEvent.contentOffset.y})}

Home.propTypes = {
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

export default Home;
