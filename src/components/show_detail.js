import React from 'react';
import PropTypes from 'prop-types';
import ShowDetailEntry from './show_detail_entry';

const ShowDetail = props => (
  <div className="col-md-6 col-lg-4">
    <div className="show-detail card">
      <img
        className="show-detail__image card-img-top"
        src={props.image}
        alt={props.name}
      />
      <div className="show-detail__title">
        {props.name}
      </div>
      <div className="show-detail__body card-block">
        <ShowDetailEntry title="Date" value={props.date} />
      </div>
    </div>
  </div>
);

ShowDetail.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShowDetail;
