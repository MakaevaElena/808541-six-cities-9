import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
// import { getToken } from '../../../services/token';

function Login(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.Auth &&
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">

                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Favorites}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        }
        {
          authorizationStatus !== AuthorizationStatus.Auth &&
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Login;

