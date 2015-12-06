// npm
import React, { Component, PropTypes, View, StyleSheet,ScrollView, Text, TouchableOpacity } from 'react-native';
// Components
import QueuedTrack from './QueuedTrack.js';

import Player from './Player.js';
import Header from './Header.js';

class Party extends Component {

  constructor () {
    super();

    this.state = {
      queue: [{
        artist:"Eminem",
        title:   "One of Eminem's hits about his horse",
        picture: "http://www.howrse.com/media/equideo/image/chevaux/adulte/americain/normal/300/bai_v1828806360.png",
        uri:"http://localhost:9009/song?youtube=https://www.youtube.com/watch?v=ab9176Srb5Y"
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
    this.createResults = this.createResults.bind(this);
  }

  createResults (queue) {
    return this.props.playlist.map( (result,i) => <QueuedTrack
      name = {result.artist}
      title= {result.title}
      picture={result.album_image}
      url={'http://localhost:9009/song?youtube='+result.url}
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
      finishTrack,
      props: {tabPress, bottomTab, partyName}
    } = this;

    return (
      <View style = {styles.container}>
        <View style={styles.playing}>
          {
            bottomTab ? <Header/> : <Player
              next = {finishTrack}
              {...queue[0]}
            />
          }
          <TouchableOpacity onPress={tabPress} style={{backgroundColor: 'white', height:15}}/>
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
    backgroundColor: '#b31217',
    flexDirection:   'column',
    justifyContent:  'space-between',
  },
    video: {
      height:0,
      width: 0
    },
    playing: {
      height: 90,
      backgroundColor: 'blue',
      flexDirection: 'column',
      alignItems: 'stretch'
    },
      trackScroll: {
        height: 90,
        backgroundColor: 'b31217'
      },
        scrollContent: {
          flexDirection: 'column',
          alignItems:    'stretch'
        },
})

export default Party;
