import { Link } from 'react-router-dom';
import Header from '../common-components/header-component/header-component';
import { OfferType } from '../../types/offer-type';
import FavoriteCard from '../common-components/favorite-card-component/favorite-card-component';
import { AppRoute } from '../../const';

type FavoritesScreenProps = {
  favoriteOffer: OfferType;
}

function FavoritesScreen({ favoriteOffer }: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Main}>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoriteCard favoriteOffer={favoriteOffer} />

                  <FavoriteCard favoriteOffer={favoriteOffer} />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Main}>
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoriteCard favoriteOffer={favoriteOffer} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesScreen;
