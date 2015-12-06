import React, {  StyleSheet, View, Text, Image, PropTypes, Dimensions} from 'react-native';

const iPhone = {
  scale: 0.9,
  width: 0.9,
  model: 6
};

var Card = React.createClass({
  propTypes: {
    artist:       PropTypes.string,
    song:         PropTypes.string,
    artistImage:  PropTypes.string,
    albumImage:   PropTypes.string,
  },

	render () {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <View style={styles.record}>
                <Image source={require('../images/disc.png')} style={styles.disc} resizeMode={'contain'}/>
            </View>
          <View style={styles.break}/>
          <View style={styles.titles}>
            <Text style={ styles.textBig}>{ this.props.artist }</Text>
            <Text style={ styles.textSmall }>{ this.props.song }</Text>
          </View>
          <View style={styles.record}>
              <Image source={{ uri: this.props.artistImage }} style={styles.artistImage} resizeMode={'contain'}/>
          </View>
          <View style={styles.break}/>
          <View style={styles.summary}>
              <Text style={styles.summaryTitle}>You Tube hits:</Text>
          </View>
        </View>
      </View>
    );
	}
});

var screenWidth = Dimensions.get('window').width

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    inputContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16 * iPhone.scale,
      paddingBottom: 0,
    },
    record: {
      flex: 4,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 30 * iPhone.width,
      width: screenWidth-70,
    },
      disc: {
        height: 120,
        width:  120
      },
    artistImage: {
      height:  70,
      width: 70
    },
    textContainer: {
      flexDirection: 'column',
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center'
    },
    textVS: {
      fontSize: 12 * iPhone.scale,
      textAlign: 'center',
    },
    textTime: {
      fontSize: 11,
      textAlign: 'center',
      marginTop: 1,
    },
    titles: {
      flex: 3.2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBig: {
      fontSize: 35 * iPhone.scale,
      textAlign: 'center',
      marginBottom: 10,
    },
    textSmall: {
      fontSize: 30 * iPhone.scale,
      textAlign: 'center',
    },
    summary: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    summaryInline: {
      flexDirection: 'row',
    },
    summaryTitle: {
      fontSize: 17,
      textAlign: 'center',
    },
    summaryText: {
      fontSize: 17,
      textAlign: 'center',
    },
    summaryReturn: {
      fontSize: 41 * iPhone.scale,
      color: '#2C9EDA',
      textAlign: 'center',
      marginBottom: 5,
    },
    break: {
      width: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',
      height: 0,
      margin: 10,
    }
});

module.exports = Card;
