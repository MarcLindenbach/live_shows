import React from 'react';
import { ShowList, LoadMore } from '../containers';

/* Live Show App Component
 * Displays the navbar, list of shows and load more button
 */
const App = () => (
  <div className="app container">
    <ShowList />
    <LoadMore />
  </div>
);

export default App;
