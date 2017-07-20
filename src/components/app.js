import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './nav_bar';

/* App Component
 * Displays the navbar component and active 'view' component
 */
const App = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

App.defaultProps = {
  children: null,
};

export default App;
