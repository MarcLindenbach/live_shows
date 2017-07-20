import React from 'react';
import { ShowList, LoadMore } from '../containers';

/*
 * Shows Component
 * All parts of the Live Shows Component
 */
const Shows = () => (
  <div className="app container">
    <ShowList />
    <LoadMore />
  </div>
);

export default Shows;
