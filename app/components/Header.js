// npm
import React, { Component, PropTypes, View, StyleSheet, Text,  Image, TouchableOpacity } from 'react-native';
// Pages

class Player extends Component {



  render () {
    const {
      props: {party}
    } = this;

    return (
      <View style = {styles.container} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PP</Text><Image source={require('../images/disc.png')} style={styles.disc} resizeMode={'contain'}/><Text style={styles.title}>M</Text>
        </View>
        <Text style={styles.party}>{party}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:75,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
    titleContainer: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
      title: {
        fontSize:40,
        fontFamily: 'Montserrat-Bold',
        color: '#b31217'
      },
      disc: {
        height: 60,
        width:  60,
        paddingHorizontal: 5
      },
      party: {
        fontSize:40,
        fontFamily: 'Montserrat',
      }
})

export default Player;
