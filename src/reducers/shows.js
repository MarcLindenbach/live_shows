import * as types from '../actions/types';

const INITIAL_STATE = {
  shows: [],
  nextPage: 1,
  fetching: false,
  allShowsFetched: false,
  error: null,
};

/*
 * Shows Reducer
 * Stores information pertaining to the shows
 */
const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SHOWS_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        fetching: false,
        shows: [...state.shows, ...action.payload.shows],
        nextPage: state.nextPage + 1,
        allShowsFetched: action.payload.shows.length === 0,
      };

    case types.FETCH_SHOWS_FAILED:
      return {
        ...state,
        fetching: false,
        error: `Error fetching shows: ${action.payload.error}`,
      };

    default:
      return state;
  }
};

export default showsReducer;
