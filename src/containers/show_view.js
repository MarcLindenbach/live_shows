import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import ShowList from './show_list';
import LoadMore from './load_more';
import { fetchShows } from '../actions';

/*
 * ShowView Container View
 * All parts of the Live Shows Component
 * On mounting will load the first page of shows
 */
class ShowView extends Component {
  componentWillMount() {
    if (this.props.shows.length === 0) {
      this.props.fetchShows(this.props.nextPage);
    }
  }

  render() {
    return (
      <div className="app container">
        <Header title="Live Shows">
          <button className="btn btn-primary">Add Show</button>
          <button className="btn btn-secondary">Tools</button>
        </Header>
        <ShowList />
        <LoadMore />
      </div>
    );
  }
}

ShowView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowView);
