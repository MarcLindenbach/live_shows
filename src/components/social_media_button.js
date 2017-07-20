import React from 'react';
import PropTypes from 'prop-types';

/*
 * Social Media Button
 * Displays a circle social media icon styled for the given type
 */
const SocialMediaButton = ({ type, onClick }) => (
  <button
    className={`social-media-button social-media-button--${type}`}
    onClick={() => onClick()}
  >
    <i className={`fa fa-${type}`} />
  </button>
);

SocialMediaButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SocialMediaButton;
