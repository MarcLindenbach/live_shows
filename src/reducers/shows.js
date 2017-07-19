import * as types from '../actions/types';

const INITIAL_STATE = {
  shows: [],
  nextPage: 1,
  fetching: false,
  fetched: false,
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
        nextPage: state.nextPage + 1,
      };

    case types.FETCH_SHOWS_FAILED:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
};

export default showsReducer;
