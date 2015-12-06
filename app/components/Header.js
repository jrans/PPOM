// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages

class Player extends Component {



  render () {
    const {
    } = this;

    return (
      <View style = {styles.container} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PP</Text><Image source={require('../images/disc.png')} style={styles.disc} resizeMode={'contain'}/><Text style={styles.title}>M</Text>
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
    titleContainer: {
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
      title: {
        fontSize: 50,
        fontFamily: 'Montserrat-Bold',
        color: 'red'
      },
      disc: {
        height: 50,
        width:  50,
        paddingHorizontal: 5
      },
})

export default Player;
