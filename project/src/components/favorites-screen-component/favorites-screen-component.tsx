import Header from '../common-components/header-component/header-component';
import { FavoriteType } from '../../types/favorite-type';
// import { OfferType } from '../../../types/offer-type';
import FavoritesList from '../common-components/favorit-list-component/favorite-list-component';
import FooterComponent from '../common-components/footer-component/footer-component';

type FavoritesScreenProps = {
  favorites: FavoriteType[];
}

function FavoritesScreen({ favorites }: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList favorites={favorites} />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default FavoritesScreen;
