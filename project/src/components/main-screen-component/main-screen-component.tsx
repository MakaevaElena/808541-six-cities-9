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
import Sorting from '../common-components/sorting-component/sorting-component';
// import { sortOffers } from '../../../utils';

type MainScreenProps = {
  offers: OfferType[],
}

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const [selectedOfferId, setSelectedOffer] = useState<number | null>(null);

  const currentCity = useAppSelector((state: State) => state.city);
  const filderedOffers = getCityOffers(currentCity, offers);
  const getActiveOfferId = (id: number | null) => setSelectedOffer(id);

  return (
    <>
      {filderedOffers.length > 0 && (
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
                  <Sorting />
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
        !filderedOffers && < EmptyMainScreen city={currentCity} />
      }
    </>
  );
}

export default MainScreen;
