import { createReducer } from '@reduxjs/toolkit';
import {
  setCity,
  setSortType,
  loadOffers,
  loadFavorites,
  requireAuthorization,
  getLogin,
  loadOffersNearby,
  getOfferId,
  loadReviews
} from './action';
import { CITIES } from '../const';
import { SortingType } from '../utils';
import { OfferType } from '../types/offer-type';
import { FavoriteType } from '../types/favorite-type';
import { ReviewType } from '../types/review-type';
import { AuthorizationStatus } from '../const';

const DEFAULT_OFFERS: OfferType[] = [];
const DEFAULT_CURRENT_OFFER: OfferType | null = null;
const DEFAULT_FAVORITES: FavoriteType[] = [];
const DEFAULT_REVIEWS: ReviewType[] | null = [];
const DEFAULT_OFFERS_NEARBY: OfferType[] = [];
const DEFAULT_CURRENT_COMMENTS: ReviewType[] = [];

const initialState = {
  city: CITIES[0],
  offers: DEFAULT_OFFERS,
  currentOffer: DEFAULT_CURRENT_OFFER,
  favorites: DEFAULT_FAVORITES,
  reviews: DEFAULT_REVIEWS,
  sortType: SortingType.POPULAR,
  isOffersLoaded: false,
  isReviewsLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
  offersNearby: DEFAULT_OFFERS_NEARBY,
  offerId: 0,
  currentOfferComments: DEFAULT_CURRENT_COMMENTS,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(getLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

