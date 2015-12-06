import React, { AppRegistry, Component } from 'react-native';

import { Provider } from 'react-redux/native';

import App from './app/components';
import configureStore from './app/store/configureStore.js';

const store = configureStore();

class PPOM extends Component {

  render () {
    return (
      <Provider store={store}>
        {() => <App/> }
      </Provider>
    );
  }
};


// For playing with front end quickly
// import Temp from './app/component/....;
// import Test from './app/component/test.js'


AppRegistry.registerComponent('PPOM', () => PPOM);
