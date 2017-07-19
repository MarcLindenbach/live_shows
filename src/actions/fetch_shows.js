import axios from 'axios';
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
  paylod: {
    shows,
  },
});

export const fetchShows = pageNumber =>
  (dispatch) => {
    dispatch(fetchShowsRequest());
    return axios.get(`http://fake-shows-endpoint.com/show/?page=${pageNumber}`)
      .then(({ data }) => dispatch(fetchShowsSuccess(data)))
      .catch(({ response, message }) => {
        const err = response ? response.data : message;
        dispatch(fetchShowsFailed(err));
      });
  };
