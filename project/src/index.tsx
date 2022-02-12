import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  OFFERS_COUNT: 10,
  OFFERS_SHOWN: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Settings.OFFERS_COUNT} offersShown={Settings.OFFERS_SHOWN} />
  </React.StrictMode>,
  document.getElementById('root'));
