import * as types from '../actions/types';

const INITIAL_STATE = {
  shows: [],
  fetching: false,
  fetched: false,
  error: null,
};

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
        shows: action.payload.shows,
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
