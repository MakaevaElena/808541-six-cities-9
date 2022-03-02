import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../main-screen-component/main-screen-component';
import FavoritesScreen from '../favorites-screen-component/favorites-screen-component';
import LoginScreen from '../login-screen-component/login-screen-component';
import NotFoundScreen from '../not-found-screen-component/not-found-screen-component';
import PropertyScreen from '../property-screen-component/property-screen-component';
import PrivateRoute from '../private-route/private-route';
import { OfferType } from '../../types/offer-type';
import { ReviewType } from '../../types/review-type';
import { FavoriteType } from '../../types/favorite-type';

type AppScreenProps = {
  offersCount: number;
  offers: OfferType[];
  reviews: ReviewType[];
  favorites: FavoriteType[];
}

function App({ offersCount, offers, reviews, favorites }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offersCount={offersCount} offers={offers} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen offers={offers} reviews={reviews} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
