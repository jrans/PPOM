// npm
import React, { Component, PropTypes, View, StyleSheet,ScrollView, Text } from 'react-native';
// Components
import QueuedTrack from './QueuedTrack.js';

import Player from './Player.js';


class Party extends Component {

  constructor () {
    super();

    this.state = {
      queue: [{
        artist:"horse",
        title:   "my lovely horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      },{
        artist:"horse",
        title:   "my lovely horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      },{
        artist:"horse",
        title:   "my lovely horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      },{
        artist:"horse",
        title:   "my lovely horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
      }]
    }

    this.finishTrack=this.finishTrack.bind(this);
  }

  createResults (queue) {
    return queue.map( (result,i) => <QueuedTrack
      {...result}
      key          = {i}
    />)
  }

  finishTrack () {
    const {queue} = this.state;
    const length = queue.length;
    let newQ = [];
    if (length > 1) {
      newQ=queue.slice(1)
    }
    this.setState({queue:newQ});
  }

  render () {
    const {
      state: {queue},
      createResults,
      finishTrack
    } = this;

    return (
      <View style = {styles.container}>
        <View style={styles.playing}>
          <Player
            next = {finishTrack}
            {...queue[0]}
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
          {createResults(queue.slice(1))}
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

Party.propTypes = {
  changePage:  PropTypes.func,
  changeState: PropTypes.func,
  state:       PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'red',
    flexDirection:   'column',
    justifyContent:  'space-between',
  },
    video: {
      height:0,
      width: 0
    },
    playing: {
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

export default Party;
