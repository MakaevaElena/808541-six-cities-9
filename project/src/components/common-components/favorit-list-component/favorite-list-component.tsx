// import { OfferType } from '../../../types/offer-type';
import FavoritesLocationCards from '../favorite-location-cards-components/favorite-location-cards-components';
import { FavoriteType } from '../../../types/favorite-type';
import { CITIES } from '../../../const';

type FavoriteListProps = {
  favorites: FavoriteType[];
}

function FavoritesList({ favorites }: FavoriteListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {CITIES.map((city) => (
          <FavoritesLocationCards
            key={city}
            city={city}
            locationOffers={favorites.filter((favorite) => (favorite.city.name === city))}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoritesList;
