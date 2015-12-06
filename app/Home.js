// npm
import React, { Component, PropTypes, View, StyleSheet, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
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
      <View style={styles.container} >
        <Video source={{uri: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"}}
           style={styles.backgroundVideo}
           resizeMode="cover"
           repeat={true}
           volume={1.0}
           key="video2"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PPOM</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder='WHAT PARTY ARE YOU AT?'
          />
          <TouchableOpacity style={styles.button} onPress={() => this.props.changePage('Party')}>
            <Text >GO TO THE PARTY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.changePage('Search')}>
            <Text >SEARCH FOR A TRACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text >START A PARTY</Text>
          </TouchableOpacity>
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
    backgroundColor: 'transparent'
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 30
  },
  titleContainer: {
    height: 100,
  },
    title: {
      fontSize: 50
    },
  button: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0080ff'
  },
  bottomContainer: {
    height: 200
  },
  inputContainer: {
    height: 150
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }

})

export default Home;
