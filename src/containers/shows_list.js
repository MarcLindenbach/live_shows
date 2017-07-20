import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';
import { ShowDetail } from '../components';

class ShowsList extends Component {
  componentWillMount() {
    this.props.fetchShows();
  }

  render() {
    return (
      <ul>
        {this.props.shows.map(show => <ShowDetail key={show.id} {...show} />)}
      </ul>
    );
  }
}

ShowsList.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ shows }) => ({
  shows: shows.shows,
});

const mapDispatchToProps = {
  fetchShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
