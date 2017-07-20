import React from 'react';
import PropTypes from 'prop-types';
import ShowDetail from './show_detail';
import SocialMediaButton from './social_media_button';

/*
 * Show Card Component
 * Displays the details of a show
 * This component is ripe for breaking up, I left it as is because although large there is minimal
 * repetition. If I felt there were components that could be re-used I would split this component
 * into 4:
 *   - ShowCard
 *     - ShowCardImage
 *     - ShowCardTitle
 *     - ShowCardDetails
 *     - ShowCardSocialMediaButtons
 */
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
      <div className="show-card__social-media card-footer">
        <span className="text-muted">Promote</span>
        <SocialMediaButton
          type="facebook"
          onClick={() => console.log(`Facebook Clicked (show ${props.id})`)}
        />
        <SocialMediaButton
          type="twitter"
          onClick={() => console.log(`Twitter Clicked (show ${props.id})`)}
        />
        <SocialMediaButton
          type="instagram"
          onClick={() => console.log(`Instagram Clicked (show ${props.id})`)}
        />
      </div>
    </div>
  </div>
);

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
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
