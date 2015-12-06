// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages
import Video from 'react-native-video';


class Player extends Component {

  constructor () {
    super();
    this.state = {
      paused:true
    }
    this.play=this.play.bind(this);
  }
  //
  // componentWillReceiveProps(props) {
  //
  //   if (props.uri!==props.trackPlaying) {
  //     this._player.seek(0);
  //     this.setState({paused:true})
  //   }
  // }

  play () {
    this.setState({paused:!this.state.paused});
  }


  render () {
    const {
      props: {
        artist,
        title,
        picture,
        uri,
        next
      },
      play,
      state: {paused}
    } = this;

    return (
      <View style = {styles.container} >
        { uri!==undefined && <Video
            resizeMode  = "cover"
            source      = {{uri: uri || 'blank'}}
            style       = {styles.video}
            repeat      = {true}
            volume      = {1.0}
            paused      = { paused }

            onLoadStart={()=>console.log('onLoadStart', arguments)}
            onLoad={()=>console.log('onLoad', arguments)}
            onProgress={()=>console.log('onProgress', arguments)}
            onEnd       = {next}
            ref         = {component=>this._player=component}
          />
        }
        <TouchableOpacity style={styles.play} onPress={play} />
        <Image source = {{uri:picture}} style = {styles.icon} />
        <Text style = {styles.artist} >
          {artist}
        </Text>
        <Text style = {styles.title} >
          {title}
        </Text>
        <TouchableOpacity style={styles.add} onPress={next} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:30,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
    artist: {
      fontSize: 20,
      color: 'blue'
    },
    title: {
      fontSize: 20,
      color: 'blue'
    },
    icon: {
      height: 20,
      width:  20,
    },
    play: {
      height: 20,
      width: 20,
      backgroundColor: 'black'
    },
    add : {
      height: 20,
      width: 20,
      backgroundColor: 'green'
    }
})

export default Player;
