import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

import MainScreen from '../main-screen-component/main-screen-component';
import FavoritesScreen from '../favorites-screen-component/favorites-screen-component';
import LoginScreen from '../login-screen-component/login-screen-component';
import NotFoundScreen from '../not-found-screen-component/not-found-screen-component';
import PropertyScreen from '../property-screen-component/property-screen-component';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../common-components/spinner-component/spinner-component';

import HistoryRouter from '../../components/history-route/history-route';
import browserHistory from '../../browser-history';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const { authorizationStatus, isOffersLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isOffersLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}

export default App;
