// npm
import React, { Component, PropTypes, View, StyleSheet, WebView } from 'react-native';
// Pages

class Home extends Component {

  render () {
    return (
      <View style = {styles.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          url={'https://www.youtube.com/watch?v=xsxVDtpO9tM'}
          allowsInlineMediaPlayback={true}
          startInLoadingState={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red'
  }
})

Home.propTypes = {
};

export default Home;
