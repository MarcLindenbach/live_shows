import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

const LoadMoreButton = props => (
  <button onClick={() => props.fetchShows(props.nextPage)}>
    Load More
  </button>
);

LoadMoreButton.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  nextPage: PropTypes.number.isRequired,
};

const mapStateToProps = ({ shows }) => ({
  nextPage: shows.nextPage,
});

const mapDispatchToProps = {
  fetchShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
