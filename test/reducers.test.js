import showReducer from '../src/reducers/shows';
import * as types from '../src/actions/types';

describe('Shows Reducer', () => {
  // The expected initial state of the shows reducer
  const expectedInitialState = {
    shows: [],
    error: null,
    allShowsFetched: false,
    fetching: false,
    nextPage: 1,
  };

  // The expected state of the shows reducer while fetching
  const fetchingState = {
    ...expectedInitialState,
    fetching: true,
  };

  it('returns the correct initial state', () => {
    const state = showReducer(undefined, {});

    expect(state).toEqual(expectedInitialState);
  });

  it('updates fetching props on FETCH_SHOWS_REQUEST action', () => {
    const action = {
      type: types.FETCH_SHOWS_REQUEST,
    };
    const state = showReducer(undefined, action);

    expect(state).toEqual({
      ...expectedInitialState,
      fetching: true,
    });
  });

  it('updates fetching and error props on FETCH_SHOWS_FAILED action', () => {
    const action = {
      type: types.FETCH_SHOWS_FAILED,
      payload: {
        error: 'Something went wrong',
      },
    };
    const state = showReducer(fetchingState, action);

    expect(state).toEqual({
      ...fetchingState,
      fetching: false,
      error: 'Error fetching shows: Something went wrong',
    });
  });

  it('updates shows, next page and fetching props on FETCH_SHOWS_SUCCESS action', () => {
    const action = {
      type: types.FETCH_SHOWS_SUCCESS,
      payload: {
        shows: [1, 2],
      },
    };
    const state = showReducer(fetchingState, action);

    expect(state).toEqual({
      ...fetchingState,
      fetching: false,
      shows: [1, 2],
      nextPage: 2,
    });
  });
});
