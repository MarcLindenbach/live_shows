import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';


const getLoadMoreContent = (fetching, allShowsFetched) => {
  if (fetching) { return 'Loading Shows...'; }
  if (allShowsFetched) { return 'No More Shows'; }
  return 'Load More';
};

const LoadMore = props => (
  <button
    onClick={() => props.fetchShows(props.nextPage)}
    disabled={props.fetching || props.allShowsFetched}
  >
    {getLoadMoreContent(props.fetching, props.allShowsFetched)}
  </button>
);

LoadMore.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  nextPage: PropTypes.number.isRequired,
  fetching: PropTypes.bool.isRequired,
  allShowsFetched: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ shows }) => ({
  nextPage: shows.nextPage,
  fetching: shows.fetching,
  allShowsFetched: shows.allShowsFetched,
});

const mapDispatchToProps = {
  fetchShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);
