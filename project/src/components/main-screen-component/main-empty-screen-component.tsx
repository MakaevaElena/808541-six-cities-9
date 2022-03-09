import Header from '../common-components/header-component/header-component';
import CityList from '../common-components/city-list/city-list';

type EmptyMainScreenProps = {
  city: string;
}

function EmptyMainScreen({ city }: EmptyMainScreenProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList city={city} />
        </div>
        <div className="cities">

          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city}
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default EmptyMainScreen;
