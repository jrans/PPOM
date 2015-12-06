// npm
import React, { Component, PropTypes, View, StyleSheet, Image, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
// Pages
import Video from 'react-native-video';

const {
  height: screenHeight,
  width: screenWidth
} = Dimensions.get('window');

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Video source={{uri: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"}}
         style={styles.backgroundVideo}
         resizeMode="cover"
         repeat={true}
         volume={1.0}
         key="video2"
        />
        <View style={styles.container} >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>PP</Text><Image source={require('../images/disc.png')} style={styles.disc} resizeMode={'contain'}/><Text style={styles.title}>M</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder='WHAT PARTY ARE YOU AT?'
              placeholderTextColor='white'
            />
            <TouchableOpacity style={styles.button} onPress={() => this.props.changePage('Party')}>
              <Text style={styles.text}>GO TO THE PARTY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>START A PARTY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  changePage: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  input: {
    height: 80,
    width: 350,
    borderColor: 'white',
    borderWidth: 5,
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 15,
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  titleContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
    title: {
      fontSize: 80,
      fontFamily: 'Montserrat-Bold',
      color: 'white'
    },
  button: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#b31217',
    borderColor: 'white',
  },
  bottomContainer: {
    height: 100
  },
  inputContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  disc: {
    height: 70,
    width:  70,
    paddingHorizontal: 5
  },

})

export default Home;
