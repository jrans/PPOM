// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages
import Video from 'react-native-video';


class TrackResults extends Component {

  constructor () {
    super();
    this.state = {
      paused:true
    }
    this.play=this.play.bind(this);
    this.stop=this.stop.bind(this);
  }

  componentWillReceiveProps(props) {

    if (props.uri!==props.trackPlaying) {
      this._player.seek(0);
      this.setState({paused:true})
    }
  }

  play () {
    this.setState({paused: !this.state.paused });
    this.props.changeTrack();
  }

  stop () {
    this.setState({paused:true});
  }

  render () {
    const {
      props: {
        artist,
        title,
        picture,
        uri,
        restart,
        trackPlaying,
        addTrack
      },
      play,
      stop,
      state: {paused}
    } = this;

    return (
      <View style = {styles.container} >
        <Video
          resizeMode  = "cover"
          source      = {{uri}}
          style       = {styles.video}
          repeat      = {true}
          volume      = {1.0}
          paused      = {trackPlaying!==uri || paused}
          onEnd       = {stop}
          ref         = {component=>this._player=component}
        />
        <TouchableOpacity style={styles.add} onPress={play} >
          <Image source={ paused ? require('../images/play.png') : require('../images/pause.png') } resizeMode='contain' style={styles.add} />
        </TouchableOpacity>
        <Text style = {styles.artist} >
          {artist}
        </Text>
        <Text style = {styles.title} >
          {title}
        </Text>
        <TouchableOpacity style={styles.add} onPress={addTrack} >
          <Image source={require('../images/plus.png')} resizeMode='contain' style={styles.add} />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
  },
    artist: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Montserrat-Regular'
    },
    title: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Montserrat-Light'
    },
    icon: {
      height: 20,
      width:  20,
    },
    add : {
      height: 30,
      width: 30,
    },

})

export default TrackResults;
