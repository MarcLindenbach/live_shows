import moxios from 'moxios';

moxios.install();

moxios.stubRequest(`http://fakeshowsapi.com/shows`, {
  status: 200,
  response: [1,2,3],
});
