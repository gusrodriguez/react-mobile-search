import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';


// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

function Card(props) {
  const { tour } = props;
  const specialOfferPriceClass = tour.isSpecialOffer ? 'card_price_special-offer' : '';
  const priceClass = `card_price ${specialOfferPriceClass}`;

  return (
    <React.Fragment>
      <li className="card_list-item">
        <div className="card_align-wrapper">
          <img alt={tour.title} className="card_picture" src={tour.thumbnail} />
          <div className="card_title">
            {tour.title}
            <div className="card_rating">
              <StarRatingComponent
                name="card_rating"
                value={Number(tour.rating)}
                editing={false}
              />
            </div>
            {
              tour.isSpecialOffer &&
              <div className="card_badge">
                <span className="card_badge_text">Special Offer</span>
              </div>
            }
          </div>
        </div>
      </li>
      <span className={priceClass}>{`${tour.currency} ${tour.price}`}</span>
      <hr className="card_list-divider" />
    </React.Fragment>
  );
}

Card.propTypes = {
  tour: PropTypes.object,
};

Card.defaultProps = {
  tour: null,
};

export default Card;
