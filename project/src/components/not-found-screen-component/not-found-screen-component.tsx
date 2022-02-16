import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../common-components/header-component/header-component';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main">
        <div style={{
          width: '100 %',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingTop: '100px',
          textAlign: 'center',
        }}
        >
          <span style={{ fontSize: '28px', fontWeight: '500', marginRight: '10px' }}>404</span>
          <h1>Page not found</h1>
          <Link to={AppRoute.Main}>Back to main page</Link>
        </div>
      </main >
    </div>

  );
}

export default NotFoundScreen;
