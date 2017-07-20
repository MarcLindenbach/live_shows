import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { ShowCard } from '../components';

/*
 * Show List Component
 * Displays each individual show card that exists in the store
 */
const ShowList = ({ shows }) => (
  <ReactCSSTransitionGroup
    transitionName={{
      enter: 'show-list--enter',
      enterActive: 'show-list--enter-active',
    }}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
    className="shows-list row"
  >
    {shows.map(show => <ShowCard key={show.id} {...show} />)}
  </ReactCSSTransitionGroup>
);

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ shows }) => ({
  shows: shows.shows,
});

export default connect(mapStateToProps)(ShowList);
