import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../common-components/header-component/header-component';
import FavoritesList from '../common-components/favorit-list-component/favorite-list-component';
import EmptyFavoriteList from '../common-components/favorit-list-component/empty-favorite-list-component';
import FooterComponent from '../common-components/footer-component/footer-component';

import { loadFavoriteAction } from '../../store/api-actions/api-actions';
import { useAppSelector } from '../../hooks/index';

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoriteAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${favorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favorites.length > 0 && <FavoritesList favorites={favorites} />}
          <EmptyFavoriteList />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default FavoritesScreen;
