import React from 'react';
import PropTypes from 'prop-types';

/*
 * Show Detail Component
 * Displays an individual line of show detail
 */
const ShowDetail = ({ title, value }) => (
  <div className="show-card__details__entry">
    <span className="text-muted">{title}</span>
    <span>{value}</span>
  </div>
);

ShowDetail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ShowDetail;
