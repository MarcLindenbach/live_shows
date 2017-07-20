import React from 'react';
import PropTypes from 'prop-types';

const ShowCard = ({ date, image}) => (
  <li>
    <img src={image} />
    { date }
  </li>
);

ShowCard.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShowCard;
