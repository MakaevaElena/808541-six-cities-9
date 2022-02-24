import { OfferType } from '../../../types/offer-type';
import FavoriteCard from '../favorite-card-component/favorite-card-component';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type FavoriteLocationProps = {
  locationOffers: OfferType[],
}

function FavoritesLocationCards({ locationOffers }: FavoriteLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{locationOffers[0].city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          locationOffers.map((offer) => {
            const keyValue = `${offer.id}-${offer.city.name}`;
            return <FavoriteCard key={keyValue} favoriteOffer={offer} />;
          },
          )
        }
      </div>
    </li>
  );
}

export default FavoritesLocationCards;
