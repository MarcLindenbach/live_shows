import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

const LoadMoreButton = props => (
  <button onClick={() => props.fetchShows()}>
    Load More
  </button>
);

LoadMoreButton.propTypes = {
  fetchShows: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchShows,
};

export default connect(null, mapDispatchToProps)(LoadMoreButton);
