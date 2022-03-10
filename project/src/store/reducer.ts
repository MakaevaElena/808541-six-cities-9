import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setSortType } from './action';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';
import { SortingType } from '../utils';

const initialState = {
  city: CITIES[0],
  offers: offers,
  sortType: SortingType.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

