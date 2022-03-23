import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { OfferType } from '../../types/offer-type';
import { FavoriteType } from '../../types/favorite-type';
import { ReviewType } from '../../types/review-type';

const DEFAULT_OFFERS: OfferType[] = [];
const DEFAULT_CURRENT_OFFER: OfferType | null = null;
const DEFAULT_FAVORITES: FavoriteType[] = [];
const DEFAULT_REVIEWS: ReviewType[] | null = [];
const DEFAULT_OFFERS_NEARBY: OfferType[] = [];
// const DEFAULT_CURRENT_COMMENTS: ReviewType[] = [];

const initialState = {
  offers: DEFAULT_OFFERS,
  favorites: DEFAULT_FAVORITES,
  offersNearby: DEFAULT_OFFERS_NEARBY,
  reviews: DEFAULT_REVIEWS,
  isOffersLoaded: false,
  isReviewsLoaded: false,
  currentOffer: DEFAULT_CURRENT_OFFER,
  // currentOfferComments: DEFAULT_CURRENT_COMMENTS,
};

const offersData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    },
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    loadOffersNearby: (state, action) => {
      state.offersNearby = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    },
    loadCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
  },
});

const { loadOffers, loadFavorites, loadOffersNearby, loadReviews, loadCurrentOffer } = offersData.actions;

export { offersData, loadOffers, loadFavorites, loadOffersNearby, loadReviews, loadCurrentOffer };

