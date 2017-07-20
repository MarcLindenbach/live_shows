import React from 'react';
import PropTypes from 'prop-types';

const ShowDetail = ({ date, image }) => (
  <li>
    <img src={image} />
    { date }
  </li>
);

ShowDetail.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShowDetail;
