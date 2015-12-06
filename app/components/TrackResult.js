// npm
import React, { Component, PropTypes, View, StyleSheet, Text } from 'react-native';
// Pages

class TrackResults extends Component {

  render () {
    return (
      <View style = {styles.container} >
        <Text style = {styles.name} >
          NAME
        </Text>
      </View>
    );
  }
}

TrackResults.propTypes = {
  artist: PropTypes.string,
  title:  PropTypes.string,
  url:    PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height:30,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
    name: {
      fontSize: 20,
      color: 'blue'
    }
})

export default TrackResults;
