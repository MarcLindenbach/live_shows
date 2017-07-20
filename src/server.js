import moxios from 'moxios';
import _ from 'lodash';

const showsPerRequest = 3;

const getMockShow = id => ({
  id,
  name: 'Wild West ready to rock live',
  date: 'July 31, 2017',
  time: '9PM',
  venue: 'Muzooka Club',
  location: 'Calgary, AB',
  role: 'Headliner',
  admission: '$14',
  image: `http://lorempixel.com/400/200/people/${id}`,
});

const getMockShows = () => _.times(showsPerRequest, getMockShow);

moxios.install();

moxios.stubRequest('http://fakeshowsapi.com/shows', {
  status: 200,
  response: getMockShows(),
});
