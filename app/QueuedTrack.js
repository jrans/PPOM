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
        <Image source = {{uri:picture}} style = {styles.icon} />
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
    }
})

export default QueuedTrack;
