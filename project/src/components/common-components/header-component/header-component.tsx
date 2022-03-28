import Logo from '../logo-component/logo-component';
import Login from '../login-component/login-component';

type HeaderProps = {
  isLoginPage?: boolean;
}

function Header({ isLoginPage }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {!isLoginPage ? <Login /> : ''}
        </div>
      </div>
    </header>

  );
}

export default Header;
