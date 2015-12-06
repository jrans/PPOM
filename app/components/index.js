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

const tabHeight = 90;

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
    this.refCreator   = this.refCreator.bind(this);
  }

  changeState (change) {
    this.setState(change)
  }

  changePage (page) {
    this.setState({ page : page } )
  }

  toggleHeight(tab, animatedValue){
    this.state.bottomTab && this.searchInput.blur();
    Animated.timing(animatedValue, {
      toValue:  this.state[tab]? tabHeight : screenHeight - tabHeight,
      duration: 100,
      easing:   Easing.inOut(Easing.quad),
    }).start(() => this.setState({ [tab]: !this.state[tab] }));
  }

  refCreator (name) {
    return (component) => {
      this[name] = component
    }
  }

  render () {
    const {
      changeState,
      changePage,
      refCreator,
      state: {topTab, bottomTab, topTabHeight, bottomTabHeight, page},
    } = this;

    switch(page) {
      case 'Home':
        return <Home changePage = { changePage } changeState = { changeState } />
      case 'Party':
        return (
            <View style = { styles.container } >
              <DJ/>
                <Animated.View style = { [{ height: this.state.topTabHeight, top: 0 }, styles.tabContainer ] }>
                  <Party tabPress={this.toggleHeight.bind(this,'topTab', topTabHeight)} bottomTab={bottomTab} partyName={"Freds House!"}/>
                </Animated.View>

              <Animated.View
                style = { [{ height: bottomTabHeight, bottom: 0 }, styles.tabContainer] }
              >
                <Search bottomTab={bottomTab} tabPress={this.toggleHeight.bind(this,'bottomTab', bottomTabHeight)} refCreator={refCreator}/>

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
