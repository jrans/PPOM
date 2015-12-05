import React, { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

const iPhone = {
  scale: 0.77,
  width: 0.77,
  model: 5
};

var QuickBet = React.createClass({

  render () {

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.no} activeOpacity={0.5}>
          <Image source={require('../images/grey-cross.png')} style={styles.image}/>
        </TouchableOpacity>
       <TouchableOpacity onPress={this.props.yes} activeOpacity={0.5}>
          <Image source={require('../images/blue-tick.png')} style={styles.image}/>
        </TouchableOpacity>
      </View>
    )

  }
});

var screenWidth = require('Dimensions').get('window').width;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 26 * iPhone.scale,
    width: screenWidth,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  image: {
    height: 60 * iPhone.scale,
    width: 60 * iPhone.scale,
  },
  shareImage: {
    height: 35,
    width: 35,
    marginLeft: 16,
    marginRight: 16,
  }
})

module.exports = QuickBet;
