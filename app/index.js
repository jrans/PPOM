// npm
import React, { Component, PropTypes, View } from 'react-native';
// Pages
import Home from './Home.js';
import Search from './Search.js';
import Party from './Party.js';
import DJ from './DJ.js';

class App extends Component {

  constructor () {
    super();

    this.state = {
      page: 'Search',
      party: '',
      search: ''
    }
    this.changeState = this.changeState.bind(this);
    this.changePage  = this.changePage.bind(this);
  }

  changeState (change) {
    this.setState(change)
  }

  changePage ([age]) {
    this.setState({page})
  }

  render () {
    const {
      changeState,
      changePage,
      state,
    } = this;

    switch (state.page) {
      case 'Home':
        return <Home changePage={changePage} changeState={changeState} state={state} />
      case 'Search':
        return <Search changePage={changePage} changeState={changeState} state={state} />
      case 'Party':
        return <Party changePage={changePage} changeState={changeState} state={state} />
      case 'DJ':
        return <DJ changePage={changePage} changeState={changeState} state={state} />
    }
    return <View/>
  }
}

App.propTypes = {

};

export default App;
