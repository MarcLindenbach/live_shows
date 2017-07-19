import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

class ShowsList extends Component {
  componentWillMount() {
    this.props.fetchShows();
  }

  renderShows() {
    return this.props.shows.map(show => <li>{ show }</li>);
  }

  render() {
    return (
      <ul>
        {this.renderShows()}
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
