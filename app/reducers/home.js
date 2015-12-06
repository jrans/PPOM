import { RETURN_DECK, RETURN_PLAYLIST, NEXT_CARD } from '../constants/ActionTypes';

const cards = [
  {
    artist: 'Adele',
    song: 'Hello',
    albumImage: '../images/disc.png',
    artistImage: 'https://www.goodthingsguy.com/wp-content/uploads/2015/10/6981414-adele-pictures.jpg'
  },
  {
    artist: 'Adele1',
    song: 'Hello',
    albumImage: '../images/disc.png',
    artistImage: 'https://www.goodthingsguy.com/wp-content/uploads/2015/10/6981414-adele-pictures.jpg'
  },
  {
    artist: 'Adele2',
    song: 'Hello',
    albumImage: '../images/disc.png',
    artistImage: 'https://www.goodthingsguy.com/wp-content/uploads/2015/10/6981414-adele-pictures.jpg'
  },
  {
    artist: 'Adele3',
    song: 'Hello',
    albumImage: '../images/disc.png',
    artistImage: 'https://www.goodthingsguy.com/wp-content/uploads/2015/10/6981414-adele-pictures.jpg'
  },
  {
    artist: 'Adele4',
    song: 'Hello',
    albumImage: '../images/disc.png',
    artistImage: 'https://www.goodthingsguy.com/wp-content/uploads/2015/10/6981414-adele-pictures.jpg'
  }
];

export const initialState = {
  deck:          cards,
  currentCard:   {},
  nextCard:      {},
  playlist:      [],
};

export default function home(state = initialState, action) {

  switch (action.type) {
    case RETURN_DECK:
      return {
        ...state,
        deck:        state.deck.slice(2),
        nextCard:    state.deck.slice(1,2)[0],
        currentCard: state.deck.slice(0,1)[0],
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
    // case RESTART_HOME:
    //   return {
    //     ...initialState
    //   };
    default:
      return state;
  }
};
