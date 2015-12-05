// npm
import React, { Component, PropTypes } from 'react-native';
// Pages
import Home from './Home.js';
import Search from './Search.js';
import Party from './Party.js';
import DJ from './DJ.js';

class Entry extends Component {

  constructor () {
    this.state = {
      page: 'Home',
      party: '',
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
      state
    } = this;

    switch (page) {
      case 'Home':
        return <Home changePage={changePage} changeState={changeState} state={state} />
      case 'Search':
        return <Search changePage={changePage} changeState={changeState} state={state} />
      case 'Party':
        return <Party changePage={changePage} changeState={changeState} state={state} />
      case 'DJ':
        return <DJ changePage={changePage} changeState={changeState} state={state} />
    }
  }
}

Entry.propTypes = {

};

export default Entry;
