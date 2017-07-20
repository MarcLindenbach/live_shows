import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import _ from 'lodash';

const SHOWS_PER_REQUEST = 3;
const PAGES = 4;

const getMockShow = (id, page) => ({
  id: (page * SHOWS_PER_REQUEST) + id,
  name: 'Wild West ready to rock live',
  date: 'July 31, 2017',
  time: '9PM',
  venue: 'Muzooka Club',
  location: 'Calgary, AB',
  role: 'Headliner',
  admission: '$14',
  image: `http://lorempixel.com/400/200/people/${id}`,
});

/* Return a set number of shows with unique ids */
const getMockShows = page => _.times(SHOWS_PER_REQUEST, t => getMockShow(t, page));

/* Stub a url for each page with a delayed response to simulate latency */
const mock = new MockAdapter(axios, { delayResponse: 1500 });

_.times(PAGES, (page) => {
  mock.onGet(`http://fakeshowsapi.com/shows?page=${page + 1}`)
    .reply(200, getMockShows(page));
});

/* Stub a url for the last page which will return an empty array of shows (i.e. no shows left) */
mock.onGet(`http://fakeshowsapi.com/shows?page=${PAGES + 1}`)
  .reply(200, []);
