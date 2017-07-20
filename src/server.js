import moxios from 'moxios';
import _ from 'lodash';

const showsPerRequest = 6;

const getMockShow = id => ({
  id,
  date: '2016-10-03',
  image: `http://lorempixel.com/400/200/people/${id}`,
});

const getMockShows = () => _.times(showsPerRequest, getMockShow);

moxios.install();

moxios.stubRequest('http://fakeshowsapi.com/shows', {
  status: 200,
  response: getMockShows(),
});
