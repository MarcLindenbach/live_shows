import axios from 'axios';
import config from 'config';
import * as types from './types';

export const fetchShowsRequest = () => ({
  type: types.FETCH_SHOWS_REQUEST,
});

export const fetchShowsFailed = error => ({
  type: types.FETCH_SHOWS_FAILED,
  payload: {
    error,
  },
});

export const fetchShowsSuccess = shows => ({
  type: types.FETCH_SHOWS_SUCCESS,
  payload: {
    shows,
  },
});

export const fetchShows = pageNumber =>
  (dispatch) => {
    dispatch(fetchShowsRequest());
    return axios.get(`${config.serverUrl}/shows?page=${pageNumber}`)
      .then(({ data }) => dispatch(fetchShowsSuccess(data)))
      .catch(({ response, message }) => {
        const err = response ? response.data : message;
        dispatch(fetchShowsFailed(err));
      });
  };
