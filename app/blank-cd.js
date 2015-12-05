'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Image
} = React;

const iPhone = {
  scale: 0.77,
  width: 0.77,
  model: 5
};
var Card = React.createClass({

	render () {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <Image source={require('../images/disc.png')} style={styles.sportLogo}/>
        </View>
      </View>
    );
	}
});

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#DDD',
      borderWidth: 0.5,
      backgroundColor: 'white'
    },
    bar: {
      backgroundColor: 'transparent',
      borderColor: '#DDD',
      borderBottomWidth: 1,
      height: 85,
      alignItems: 'center',
      justifyContent: 'center',
      width: 106,
      left: -45,
      position: 'absolute',
      top: -36,
      transform: [
        {
          rotate: '-45degrees',
        },
      ],
    },
    sportLogo: {
      height: 29 * iPhone.scale,
      width: 29 * iPhone.scale,
      top: 22,
    },
});

module.exports = Card;
