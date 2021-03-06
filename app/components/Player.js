// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages
import Video from 'react-native-video';


class Player extends Component {

  constructor () {
    super();
    this.state = {
      trackDuration: 0,
      currentTime: 0
    }
  }
  //
  // componentWillReceiveProps(props) {
  //
  //   if (props.uri!==props.trackPlaying) {
  //     this._player.seek(0);
  //     this.setState({paused:true})
  //   }
  // }

  render () {
    const {
      props: {
        artist,
        title,
        picture,
        uri,
        next
      },
      state: {paused, trackDuration, currentTime}
    } = this;

    return (
      <View style = {styles.container} >
        { uri!==undefined && <Video
            resizeMode  = "cover"
            source      = {{uri: uri || 'blank'}}
            style       = {styles.video}
            repeat      = {true}
            volume      = {1.0}
            onLoad      = {(obj)=>this.setState({trackDuration:obj.duration})}
            onProgress  = {(obj)=>this.setState({currentTime:obj.currentTime})}
            onEnd       = {next}
            ref         = {component=>this._player=component}
          />
        }

        <View style={styles.playing}>
          <Image source = {{uri:picture}} style = {styles.icon} />
          <View style={styles.info} >
            <Text style = {styles.title} >
              {title}
            </Text>
            <Text style = {styles.artist} >
                {artist}
            </Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progress, {flex: currentTime}]}/>
          <View style={[styles.toGo, {flex: trackDuration-currentTime}]}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:75,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
    progressBar: {
      flexDirection: "row",
      paddingVertical: 2.5,
      height: 10,
      alignItems: 'stretch',
      backgroundColor: 'black'
    },
      progress: {
        backgroundColor: '#b31217'
      },
    playing: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    info: {
      flexDirection: 'column',
      flex:1,
      justifyContent: 'space-around'
    },
      title: {
        fontSize: 22,
        fontFamily: 'Montserrat-Regular'
      },
      artist: {
        fontSize: 15,
        color: '#b31217',
        fontFamily: 'Montserrat-Regular'
      },
    icon: {
      height: 60,
      width:  60,
      marginRight: 10
    },
})

export default Player;
