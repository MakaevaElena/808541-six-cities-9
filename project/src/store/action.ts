import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { OfferType } from '../types/offer-type';
import { ReviewType } from '../types/review-type';

export const setCity = createAction<string>('MainScreen/setSity');
export const setSortType = createAction<string>('MainScreen/setSortType');
export const loadOffers = createAction<OfferType[]>('MainScreen/loadOffers');
export const loadFavorites = createAction<OfferType[]>('data/loadFavorites');
export const loadReviews = createAction<ReviewType[]>('data/loadReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getLogin = createAction('GET_LOGIN', (value) => ({ payload: value }));
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const loadOffersNearby = createAction<OfferType[]>('data/loadOffersNearby');
export const getOfferId = createAction('GET_OFFER_ID', (value) => ({ payload: value }));
export const loadCurrentOffer = createAction<OfferType>('data/loadCurrentOffer');
