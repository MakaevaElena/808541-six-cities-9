import { FavoriteType } from '../../../types/favorite-type';
import FavoriteCard from '../favorite-card-component/favorite-card-component';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type FavoriteLocationProps = {
  locationOffers: FavoriteType[],
  city: string;
}

function FavoritesLocationCards({ locationOffers, city }: FavoriteLocationProps): JSX.Element {
  // console.log('@>>>', locationOffers);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {locationOffers.map((offer) => {
          const key = `${offer.id}`;
          return <FavoriteCard key={key} favoriteOffer={offer} />;
        })}
      </div>
    </li>
  );
}

export default FavoritesLocationCards;
