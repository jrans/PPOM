// import fetch from 'isomorphic-fetch';

import * as types from '../constants/ActionTypes.js';

function returnDeck (deck) {
  return { type: types.RETURN_DECK, deck }
};

function returnPlaylist (playlist) {
  return { type: types.RETURN_PLAYLIST, playlist }
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

//

export function getDeck (partyName) {

  return (dispatch, getState) => {

    let req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const partyID = partyName || test

    return fetch(API_URL + '/party?=' + partyID, req)
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(returnDeck(json.suggestions));
        dispatch(returnPlaylist(json.playlist))
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
        } else {
          dispatch(nextCard());
        }
      })
      .catch(err => {
        console.log('err',err);
      });
  }
}
