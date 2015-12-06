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
import Home from '../components/DJ2.js';
// --------------------------------------------------------------------------

class HomeContainer extends Component {
  render() {

    const { dispatch } = this.props;

    const homeActions  = bindActionCreators(HomeActions, dispatch);

    const actions      = {...homeActions};
    const props        = { actions, ...this.props };

    return (
      <Home
        {...props}
      />
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {

  const deck = state.home.deck;
  const currentCard = state.home.currentCard;
  const nextCard    = state.home.nextCard;

  return {
    deck,
    currentCard,
    nextCard,
  }
}

export default connect(mapStateToProps)(HomeContainer);
