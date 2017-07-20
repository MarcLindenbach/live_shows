import React from 'react';
import PropTypes from 'prop-types';

const ShowDetailEntry = ({ title, value }) => (
  <div className="show-detail__body__entry">
    <span className="text-muted">{title}</span>
    <span>{value}</span>
  </div>
);

ShowDetailEntry.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ShowDetailEntry;
