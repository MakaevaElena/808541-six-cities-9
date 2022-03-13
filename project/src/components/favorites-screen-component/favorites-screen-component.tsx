import Header from '../common-components/header-component/header-component';
// import { FavoriteType } from '../../types/favorite-type';
import FavoritesList from '../common-components/favorit-list-component/favorite-list-component';
import FooterComponent from '../common-components/footer-component/footer-component';
import { useAppSelector } from '../../hooks/index';

// type FavoritesScreenProps = {
//   favorites: FavoriteType[];
// }

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);
  // !
  // eslint-disable-next-line no-console
  // console.log('@>>>', favorites);

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
