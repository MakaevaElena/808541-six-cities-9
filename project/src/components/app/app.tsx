import { Route, Routes } from 'react-router-dom';

import HistoryRouter from '../../components/history-route/history-route';
import LoginScreen from '../login-screen-component/login-screen-component';
import MainScreen from '../main-screen-component/main-screen-component';
import NotFoundScreen from '../not-found-screen-component/not-found-screen-component';
import FavoritesScreen from '../favorites-screen-component/favorites-screen-component';
import PropertyScreen from '../property-screen-component/property-screen-component';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../common-components/spinner-component/spinner-component';

import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  // const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const isOffersLoaded = useAppSelector(({ DATA }) => DATA.isOffersLoaded);

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
