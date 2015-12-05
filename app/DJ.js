// npm
import React, { Component, PropTypes, View, StyleSheet } from 'react-native';
// Pages

class Home extends Component {

  render () {
    return <View style = {styles.container} />
  }
}

Home.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red'
  }
})

export default Home;
