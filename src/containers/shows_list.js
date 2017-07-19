import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

class ShowsList extends Component {
  componentWillMount() {
    this.props.fetchShows(this.props.nextPage);
  }

  renderShows() {
    console.log(this.props.shows)
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
  nextPage: PropTypes.number.isRequired,
};

const mapStateToProps = ({ shows }) => ({
  shows: shows.shows,
  nextPage: shows.nextPage,
});

const mapDispatchToProps = {
  fetchShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
