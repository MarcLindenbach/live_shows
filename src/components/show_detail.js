import React from 'react';
import PropTypes from 'prop-types';

const ShowDetail = ({ date, image }) => (
  <div className="show-detail col-md-6 col-lg-4">
    <div className="card">
      <img className="card-img-top" src={image} />
      <div className="card-block">
        { date }
      </div>
    </div>
  </div>
);

ShowDetail.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShowDetail;
