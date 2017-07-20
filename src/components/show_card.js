import React from 'react';
import PropTypes from 'prop-types';
import ShowDetail from './show_detail';

const ShowCard = props => (
  <div className="col-md-6 col-lg-4">
    <div className="show-card card">
      <img
        className="show-card__image card-img-top"
        src={props.image}
        alt={props.name}
      />
      <div className="show-card__title">
        {props.name}
      </div>
      <div className="show-card__details card-block">
        <ShowDetail title="Date" value={props.date} />
        <ShowDetail title="Time" value={props.time} />
        <ShowDetail title="Venue" value={props.venue} />
        <ShowDetail title="Location" value={props.location} />
        <ShowDetail title="Role" value={props.role} />
        <ShowDetail title="Admission" value={props.admission} />
      </div>
    </div>
  </div>
);

ShowCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  admission: PropTypes.string.isRequired,
};

export default ShowCard;