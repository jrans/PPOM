// npm
import React, { Component, PropTypes, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// Pages
import Video from 'react-native-video';


class TrackResults extends Component {

  render () {
    const {
      artist,
      title,
      url,
      picture,
      play,
      setTime,
      setDuration,
      onEnd
    } = this.props;

    return (
      <View style = {styles.container} >
        <Video
          resizeMode = "cover"
          source      ={{uri: url}}
          style       = {styles.video}
          repeat      = {true}
          volume      = {1.0}
          onProgress  = {setTime}
          onEnd       = {onEnd}
          onLoad      = {setDuration}
        />
        <TouchableOpacity style = {styles.play} onPress={play}/>
        <Image src = {picture} style = {styles.icon} />
        <Text style = {styles.artist} >
          {artist}
        </Text>
        <Text style = {styles.title} >
          {title}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:30,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
    video: {
      height:0,
      width: 0
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
      width: 20
    }
})

export default TrackResults;
