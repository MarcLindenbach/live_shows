import React from 'react';
import { ShowList, LoadMore } from '../containers';
import Header from './header';

/*
 * ShowsView Component
 * All parts of the Live Shows Component
 */
const ShowsView = () => (
  <div className="app container">
    <Header title="Live Shows">
      <button className="btn btn-primary">Add Show</button>
      <button className="btn btn-secondary">Tools</button>
    </Header>
    <ShowList />
    <LoadMore />
  </div>
);

export default ShowsView;
