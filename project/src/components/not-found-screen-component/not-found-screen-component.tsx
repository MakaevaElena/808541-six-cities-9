import Link from 'react-router-dom';
import Header from '../header-component/header-component';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <h1>404. Page not found</h1>
      <Link to="/">Back to main page</Link>

    </div>
  );
}

export default NotFoundScreen;
