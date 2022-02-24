// import { Link } from 'react-router-dom';
import Header from '../common-components/header-component/header-component';
import { OfferType } from '../../types/offer-type';
import FavoritesList from '../common-components/favorit-list-component/favorite-list-component';
// import { AppRoute } from '../../const';

type FavoritesScreenProps = {
  offers: OfferType[];
}

function FavoritesScreen({ offers }: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offers={offers} />
        </div>
      </main>
    </div>
  );
}

export default FavoritesScreen;
