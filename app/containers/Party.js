import React, { Component, PropTypes} from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
// --------------------------------------------------------------------------
// ACTIONS
// --------------------------------------------------------------------------
import * as HomeActions       from '../actions/home.js';

// --------------------------------------------------------------------------
// COMPONENTS
// --------------------------------------------------------------------------
import Party from '../components/Party.js';
// --------------------------------------------------------------------------

class HomeContainer extends Component {
  render() {


    return (
      <Party
        {...this.props}
      />
    );
  }
}


function mapStateToProps(state) {

  const playlist =state.home.playlist;

  return {
    playlist
  }
}

export default connect(mapStateToProps)(HomeContainer);
