import Logo from '../logo-component/logo-component';
import Login from '../login-component/login-component';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Login />
        </div>
      </div>
    </header>

  );
}

export default Header;
