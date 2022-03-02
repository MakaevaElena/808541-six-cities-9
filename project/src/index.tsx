import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { favorites } from './mocks/favorites';

const Settings = {
  OFFERS_COUNT: 10,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
      reviews={reviews}
      favorites={favorites}
    />
  </React.StrictMode>,
  document.getElementById('root'));
