// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages


class QueuedTrack extends Component {

  render () {
    const {
      artist,
      title,
      picture
    } = this.props;

    return (
      <View style = {styles.container} >
        <View style={styles.left}>
          <Image source = {{uri:picture}} style = {styles.icon} />
          <View style={styles.songInfo}>
            <Text style = {styles.title} >
              {title}
            </Text>
            <Text style = {styles.artist} >
              {artist}
            </Text>
        </View>
        </View>
        <View style={styles.submission}>
          <Text style = {styles.submitter} >
            jacky92
          </Text>
          <Text style = {styles.adds} >
            {'   +4'}
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  left: {
    flexDirection: 'row',
  },

  submission: {
    flexDirection: 'row',
    borderWidth: 1
  },
    submitter: {
      fontSize: 20,
      color: 'white',
      fontFamily: 'Montserrat-Light'
    },
    adds: {
      fontSize: 20,
      color: '#b31217',
      fontFamily: 'Montserrat'
    },
    songInfo: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingVertical: 5,
      height: 50
    },
      artist: {
        fontSize: 13,
        color: 'white',
        fontFamily: 'Montserrat-Light'
      },
      title: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
      },
    icon: {
      height: 50,
      width:  50,
    }
})

export default QueuedTrack;
