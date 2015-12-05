import React, {  StyleSheet, View, Text, Image, PropTypes, Dimensions} from 'react-native';

const iPhone = {
  scale: 0.77,
  width: 0.77,
  model: 5
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
            <Text style={ styles.textBig}>ADELE</Text>
            <Text style={ styles.textSmall }>HELLO</Text>
          </View>
          <View style={styles.break}/>
          <View style={styles.summary}>
            <View style={styles.summaryInline}>
              <Text style={styles.summaryTitle}>PLAY ME</Text>
              <Text style={styles.summaryText}>PLAY ME</Text>
            </View>
            <Text style={styles.summaryReturn}>
              'PLAY ME'
            </Text>
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
        height: 100,
        width:  100
      },
    textContainer: {
      flexDirection: 'column',
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center'
    },
    textTeam: {
      fontSize: 14 * iPhone.scale,
      textAlign: 'center',
      flexWrap: 'wrap',
    },
    textTeamSmall: {
      fontSize: 14 * iPhone.scale,
      textAlign: 'center',
      flexWrap: 'wrap',
    },
    textTeamBig: {
      fontSize: 18 * iPhone.scale,
      textAlign: 'center',
      flexWrap: 'wrap',
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
    textLeague: {
      fontSize: 8,
      marginTop: 3,
      textAlign: 'center',
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
