import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setSortType, loadOffers, loadFavorite } from './action';
// import { offers } from '../mocks/offers';
import { CITIES } from '../const';
import { SortingType } from '../utils';
import { OfferType } from '../types/offer-type';
import { FavoriteType } from '../types/favorite-type';

const DEFAULT_OFFERS: OfferType[] = [];
const DEFAULT_FAVORITES: FavoriteType[] = [];

const initialState = {
  city: CITIES[0],
  offers: DEFAULT_OFFERS,
  favorites: DEFAULT_FAVORITES,
  sortType: SortingType.POPULAR,
  isOffersLoaded: false,
  isFavoriteLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favorites = action.payload;
      state.isFavoriteLoaded = true;
    })
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

