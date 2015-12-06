// inspired by https://github.com/NeverGoStable/WellnessDiary/blob/master/store/configureStore.js

import { compose, createStore, applyMiddleware } from 'redux';
import thunk                                     from 'redux-thunk';
import createLogger                              from 'redux-logger';
/*

thunk: for asynchronous dispatching

createLogger: to see how state changes on every action, see console

persist: for storing state into async storage and rehydrating when app opens up. You can limit what you store and what you hydrate by specifying a blacklist and logic in reducers respectively.
You can see the full api on github: https://github.com/rt2zz/redux-persist

*/

import reducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, createLogger()),
)(createStore);


// comment out blacklist if you want to preserve state in these reducers for development (note you will also want comment out the entry and login reducer)

export default () => {
  const store = finalCreateStore(reducer);
  return store;
}
