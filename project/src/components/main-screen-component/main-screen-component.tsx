import Header from '../common-components/header-component/header-component';
import CityList from '../common-components/city-list/city-list';
import { OfferType } from '../../types/offer-type';
import CardList from '../common-components/cards-list-component/cards-list-component';
import { useState } from 'react';
import Map from '../common-components/map-component/map-component';
import { useAppSelector } from '../../hooks';
import { getCityOffers } from '../../utils';
import { State } from '../../types/state';
import EmptyMainScreen from '../main-screen-component/main-empty-screen-component';

type MainScreenProps = {
  offers: OfferType[],
}

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const [selectedOfferId, setSelectedOffer] = useState<number | null>(null);

  const currentCity = useAppSelector((state: State) => state.city);
  const filderedOffers = getCityOffers(currentCity, offers);
  const getActiveOfferId = (id: number | null) => setSelectedOffer(id);

  // eslint-disable-next-line no-console
  console.log('@>>>', filderedOffers);

  return (
    <>
      {filderedOffers && (
        <div className="page page--gray page--main">
          <Header />
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <CityList city={currentCity} />
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filderedOffers.length} places to stay in {currentCity}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <CardList offers={filderedOffers} onPlaceCardHover={getActiveOfferId} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map currentCity={filderedOffers[0].city} offers={filderedOffers} selectedOffer={selectedOfferId} />
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
      {
        !filderedOffers && (
          < EmptyMainScreen city={currentCity} />
        )
      }
    </>
  );
}

export default MainScreen;
