// import { OfferType } from '../../../types/offer-type';
import FavoritesLocationCards from '../favorite-location-cards-components/favorite-location-cards-components';
import { FavoriteType } from '../../../types/favorite-type';
import { CITIES } from '../../../const';

type FavoriteListProps = {
  favorites: FavoriteType[];
}

function FavoritesList({ favorites }: FavoriteListProps): JSX.Element {
  // const favoriteOffers: OfferType[] = offers.filter((offer) => offer.isFavorite);
  // const favoriteCities: string[] = [...new Set(favoriteOffers.map((favoriteOffer) => favoriteOffer.city.name))];

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

        {/* {favoriteCities.map((city) => (
          <FavoritesLocationCards
            key={city}
            locationOffers={favoriteOffers.filter((favorite) => (favorite.city.name === city))}
          />
        ))} */}
      </ul>
    </section>
  );
}

export default FavoritesList;
