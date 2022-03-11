import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

import MainScreen from '../main-screen-component/main-screen-component';
import FavoritesScreen from '../favorites-screen-component/favorites-screen-component';
import LoginScreen from '../login-screen-component/login-screen-component';
import NotFoundScreen from '../not-found-screen-component/not-found-screen-component';
import PropertyScreen from '../property-screen-component/property-screen-component';
import PrivateRoute from '../private-route/private-route';
// import { OfferType } from '../../types/offer-type';
// import { ReviewType } from '../../types/review-type';
// import { FavoriteType } from '../../types/favorite-type';
import { LoadingScreen } from '../loading-screen-component/loading-screen-component';

// type AppScreenProps = {
// offers: OfferType[];
// reviews: ReviewType[];
// favorites: FavoriteType[];
// }

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const { authorizationStatus, isOffersLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen />}
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
