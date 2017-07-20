import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';
import { ShowCard } from '../components';

/*
 * Show List Component
 * Displays each individual show card that exists in the store
 * On mounting will fetch shows (if no shows have been fetched already)
 */
class ShowList extends Component {
  componentWillMount() {
    if (this.props.shows.length === 0) {
      this.props.fetchShows(this.props.nextPage);
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'show-list--enter',
          enterActive: 'show-list--enter-active',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        className="shows-list row"
      >
        {this.props.shows.map(show => <ShowCard key={show.id} {...show} />)}
      </ReactCSSTransitionGroup>
    );
  }
}

ShowList.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextPage: PropTypes.number.isRequired,
};

const mapStateToProps = ({ shows }) => ({
  shows: shows.shows,
  nextPage: shows.nextPage,
});

const mapDispatchToProps = {
  fetchShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
