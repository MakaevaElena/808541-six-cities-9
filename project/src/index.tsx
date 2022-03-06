import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { favorites } from './mocks/favorites';
import { Provider } from 'react-redux';
import { store } from './store';

// const Settings = {
//   OFFERS_COUNT: 10,
// };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        favorites={favorites}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
