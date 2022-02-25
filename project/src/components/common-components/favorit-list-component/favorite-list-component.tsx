import { OfferType } from '../../../types/offer-type';
import FavoritesLocationCards from '../favorite-location-cards-components/favorite-location-cards-components';

type FavoriteListProps = {
  offers: OfferType[]
}

function FavoritesList({ offers }: FavoriteListProps): JSX.Element {
  const favoriteOffers: OfferType[] = offers.filter((offer) => offer.isFavorite);
  //новый список Set, чтобы не дублировалось
  const favoriteCities: string[] = [...new Set(favoriteOffers.map((favoriteOffer) => favoriteOffer.city.name))];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteCities
            .map((city) => <FavoritesLocationCards key={city} locationOffers={favoriteOffers.filter((favorite) => (favorite.city.name === city))} />)
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
