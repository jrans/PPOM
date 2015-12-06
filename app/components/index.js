// npm
import React, { Component, PropTypes, View, Image, TouchableOpacity, Animated, Easing, Text, StyleSheet, Dimensions } from 'react-native';
// Pages
import Home   from './Home.js';
import Search from './Search.js';
import Party  from './Party.js';
import DJ     from '../containers/Home.js';

var {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('window');

const tabHeight = 100;

class App extends Component {

  constructor () {
    super();

    this.state = {
      page:            'Home',
      party:           '',
      search:          '',
      topTabHeight:    new Animated.Value(tabHeight),
      bottomTabHeight: new Animated.Value(tabHeight),
      topTab:          false,
      bottomTab:       false,
    }
    this.changeState  = this.changeState.bind(this);
    this.changePage   = this.changePage.bind(this);
    this.toggleHeight = this.toggleHeight.bind(this);
  }

  changeState (change) {
    this.setState(change)
  }

  changePage (page) {
    this.setState({ page : page } )
  }

  toggleHeight(tab, animatedValue){
    Animated.timing(animatedValue, {
      toValue:  this.state[tab]? tabHeight : screenHeight - tabHeight,
      duration: 100,
      easing:   Easing.inOut(Easing.quad),
    }).start(() => this.setState({ [tab]: !this.state[tab] }));
  }

  render () {
    const {
      changeState,
      changePage,
      state,
    } = this;

    switch(state.page) {
      case 'Home':
        return <Search/>
        // <Home changePage = { changePage } changeState = { changeState } />
      case 'Party':
      return (
            <View style = { styles.container } >
              <DJ />
              <Animated.View style = { [{ height: this.state.topTabHeight, top: 0 }, styles.tabContainer ] }>
                <Party/>
                <TouchableOpacity
                  onPress = { () => this.toggleHeight('topTab', this.state.topTabHeight) }
                  style   = { [styles.tab, { height: this.state.topTab ? screenHeight-tabHeight : tabHeight }] }
                >
                  <Image
                    resizeMode = 'contain'
                    style      = { [styles.arrow, this.state.topTab && { bottom : 10, left: screenWidth - 40, position: 'absolute' }] }
                    source     = { this.state.topTab ? require('../images/up-arrow.png') : require('../images/arrow-down.png') }
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View
                style = { [{ height: this.state.bottomTabHeight, bottom: 0 }, styles.tabContainer] }
              >
                <Search/>
                <TouchableOpacity
                  onPress = { () => this.toggleHeight('bottomTab', this.state.bottomTabHeight) }
                  style   = { [styles.tab, {height: this.state.bottomTab ? screenHeight-tabHeight : tabHeight}] }
                >
                  <Image
                    resizeMode = 'contain'
                    style      = { [styles.arrow, this.state.bottomTab && { top: 10, left: screenWidth - 40, position: 'absolute' }] }
                    source     = { this.state.bottomTab ? require('../images/arrow-down.png') : require('../images/up-arrow.png') }
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
         )
       }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'black',
    marginTop: 10
  },
  tabContainer: {
    width: screenWidth,
    backgroundColor: 'white',
    position: 'absolute',
    flexDirection: 'row',
  },
  tab: {
    right: 10,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow: {
    left: screenWidth/2 - 20,
    height: 40,
    width: 40
  },
})

export default App;
