import React from 'react';
import PropTypes from 'prop-types';

/*
 * Header Component
 * Displays the header and any custom buttons for the given view
 */
const Header = ({ title, children }) => (
  <div className="header row">
    <div className="col-md-6">
      <h1>{title}</h1>
    </div>
    <div className="col-md-6 text-md-right">
      <div className="btn-group">
        {children}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  title: '',
  children: [],
};

export default Header;
