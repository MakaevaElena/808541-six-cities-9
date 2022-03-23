import { Link } from 'react-router-dom';
import { useState } from 'react';
import { memo } from 'react';

import { useAppDispatch } from '../../../hooks';
import { toggleFavoriteAction, loadOffersAction, loadFavoriteAction } from '../../../store/api-actions/api-actions';
import { getRatingWidth, capitalizeFirstLetter } from '../../../utils';

import { AppRoute } from '../../../const';
import { OfferType } from '../../../types/offer-type';

type PlaceCardProps = {
  offer: OfferType;
  getOfferId: (id: number | null) => void;
}

function PlaceCard({ offer, getOfferId }: PlaceCardProps): JSX.Element {

  const [isOfferFavorite, setToggleFavorite] = useState(offer.isFavorite);
  const dispatch = useAppDispatch();
  const postFavoriteFlag = offer.isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteAction({
      id: offer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);

    dispatch(loadOffersAction());
    dispatch(loadFavoriteAction());
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => getOfferId(offer.id)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button  ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article >
  );
}

export default memo(PlaceCard, (prevProps, nextProps) => prevProps.offer.id === nextProps.offer.id);
