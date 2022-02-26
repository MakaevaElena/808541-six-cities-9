import Header from '../common-components/header-component/header-component';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ReviewType } from '../../types/review-type';
import { OfferType } from '../../types/offer-type';
import ReviewList from '../common-components/reviews-list-component/review-list-component';
import ReviewForm from '../common-components/review-form-component/review-form-component';
import { useParams } from 'react-router';
import NotFoundScreen from '../not-found-screen-component/not-found-screen-component';
import { getRatingWidth } from '../../utils';

type PropertyScreenProps = {
  offers: OfferType[],
  reviews: ReviewType[],
}

function PropertyScreen({ offers, reviews }: PropertyScreenProps): JSX.Element {
  const { id } = useParams<{ id?: string }>();
  const currentOffer = offers.find((offer) => offer.id === Number(id));
  return (
    <>
      {currentOffer && (
        <div className="page">
          <Header />
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">

                  {currentOffer.images.map((src) => (
                    <div className="property__image-wrapper" key={id}>
                      <img className="property__image" src={src} alt="Shows an incredible place" />
                    </div>
                  ))}

                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">

                  {currentOffer.isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}

                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      Beautiful &amp; luxurious studio at great location
                    </h1>
                    <button className="property__bookmark-button  button" type="button">
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{ width: `${getRatingWidth(currentOffer.rating)}%` }} ></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{ }</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {currentOffer.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {currentOffer.bedrooms}
                    </li>
                    <li className="property__feature property__feature--adults">
                      {currentOffer.maxAdults}
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{currentOffer.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">

                      {currentOffer.goods.map((itemName) => (
                        <li className="property__inside-item" key={itemName}>
                          {itemName}
                        </li>
                      ))}

                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img
                          className="property__avatar user__avatar"
                          src={currentOffer.host.avatarUrl}
                          width="74"
                          height="74"
                          alt="Host avatar"
                        />
                      </div>
                      <span className="property__user-name">
                        {currentOffer.host.name}
                      </span>

                      {currentOffer.host.isPro &&
                        <span className="property__user-status">
                          Pro
                        </span>}

                    </div>
                    {currentOffer.description}
                  </div>

                </div>
                <section className="property__reviews reviews">
                  <ReviewList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>

              <section className="property__map map"></section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="/">
                        <img
                          className="place-card__image"
                          src="img/room.jpg"
                          width="260"
                          height="200"
                          alt="Place"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;100</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button"
                        >
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="/">Wood and stone place</a>
                      </h2>
                      <p className="place-card__type">Private room</p>
                    </div>
                  </article>

                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="/">
                        <img
                          className="place-card__image"
                          src="img/apartment-02.jpg"
                          width="260"
                          height="200"
                          alt="Place"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;132</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="/">Canal View Prinsengracht</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>

                  <article className="near-places__card place-card">
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="/">
                        <img
                          className="place-card__image"
                          src="img/apartment-03.jpg"
                          width="260"
                          height="200"
                          alt="Place"
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;180</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to={AppRoute.Room}>Nice, cozy, warm big bed apartment</Link>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </div >
      )}
      < NotFoundScreen />
    </>
  );
}

export default PropertyScreen;
