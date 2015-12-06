import { RETURN_DECK, RETURN_PLAYLIST, NEXT_CARD } from '../constants/ActionTypes';

/**
 * Deck example object
 * @type {String}
 *
  {
    album_image: "album-image-979620007"
    artist: "artist-979620007"
    artist_image: "artist-image-979620007"
    hits: 144
    id: "47abee20-14c2-48d4-b361-385f292863a3"
    party_name: "test"
    title: "title-979620007"
    type: "suggestion"
    url: "url-979620007"
  }
 */

export const initialState = {
  deck:          [],
  currentCard:   {},
  nextCard:      {},
  playlist:      [],
};

export default function home(state = initialState, action) {

  switch (action.type) {
    case RETURN_DECK:

      const bigDeck = state.deck.concat(action.deck);

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
