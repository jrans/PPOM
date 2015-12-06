// import fetch from 'isomorphic-fetch';

import * as types from '../constants/ActionTypes.js';

function returnDeck (deck) {
  return { type: types.RETURN_DECK, deck }
};

function sliceTopCard () {
  return { type: types.NEXT_CARD };
};

/**
 * Slice top card of the deck, but before that call
 * 'getDeck' if it is runner low of cards
 */
export function nextCard () {

  return (dispatch, getState) => {

    const currentDeckLength = getState().home.deck.length;

    if (currentDeckLength < 1) {
      dispatch(getDeck());
    }

    dispatch(sliceTopCard());
  }
}

export function swipeLeft () {

  return (dispatch, getState) => {
    return dispatch(nextCard());
  }
};

export function swipeRight () {

  return (dispatch, getState) => {
    return dispatch(nextCard());
  }
};

export function getDeck () {

  return (dispatch, getState) => {

    const { store: { sessionToken } } = getState();

    let endpoint = '';
    let req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (sessionToken.length === 0) {
      endpoint = '/opendeck';
    } else {
      endpoint = '/deck';
      req.headers['Authorization'] = sessionToken;
    }

    return fetch(API_URL + endpoint, req)
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(returnDeck(json.deck));
      } else {
        // error
        console.log(json);
      }
    })
    .catch(err => {
      console.log('Error deck', err);
      // err deck
    });
  }
};

export function confirmBet (price_id, stake) {

  return (dispatch, getState) => {

    dispatch(openProcessingBet());

    const { store: { sessionToken } } = getState();

    const req = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': sessionToken,
      },
      body: JSON.stringify({ price_id, stake }),
    };

    fetch(API_URL + '/bet', req)
      .then(response => response.json())
      .then(json => {

        if (json.status === 'success') {
          dispatch(nextCard());
          dispatch(closeProcessingBet());
          dispatch(closeBetModal());
          dispatch(syncAppData());
        } else {
          dispatch(betError(json.message));
          dispatch(closeProcessingBet());
          dispatch(nextCard());
        }
      })
      .catch(err => {
        console.log('err',err);
      });
  }
}
