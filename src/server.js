import moxios from 'moxios';

const getMockData = () => [1, 2, 3];

moxios.install();

moxios.stubRequest('http://fakeshowsapi.com/shows', {
  status: 200,
  response: getMockData(),
});
