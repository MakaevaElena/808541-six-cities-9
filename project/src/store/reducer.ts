import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

