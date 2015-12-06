import { RETURN_DECK, RETURN_PLAYLIST, NEXT_CARD } from '../constants/ActionTypes';

export const initialState = {
  deck:          [],
  currentCard:   {},
  nextCard:      {},
  playlist:      [],
};

export default function home(state = initialState, action) {

  console.log('hey');

  switch (action.type) {
    case RETURN_DECK:

      const bigDeck = state.deck.concat(action.deck);

      console.log('bigDeck',bigDeck);

      return {
        ...state,
        deck:        bigDeck.slice(2),
        nextCard:    bigDeck.slice(1,2)[0],
        currentCard: bigDeck.slice(0,1)[0],
      };
    case NEXT_CARD:
      return {
        ...state,
        deck:        state.deck.slice(1),
        nextCard:    state.deck[1],
        currentCard: state.deck[2],
      };
    case RETURN_PLAYLIST:
      return {
        ...state,
        playlist:    action.playlist
      }
    default:
      return state;
  }
};
