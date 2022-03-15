import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer-type';
import { FavoriteType } from '../types/favorite-type';
import { AppRoute, AuthorizationStatus } from '../const';
import { ReviewType } from '../types/review-type';

export const setCity = createAction<string>('MainScreen/setSity');
export const setOffers = createAction<OfferType[]>('MainScreen/setOffers');
export const setSortType = createAction<string>('MainScreen/setSortType');
export const loadOffers = createAction<OfferType[]>('loadOffers');
export const loadFavorite = createAction<FavoriteType[]>('data/loadFavorite');
// export const loadReviews = createAction<ReviewType[]>('data/fetchReviews');
export const loadReviews = createAction('loadComments', (value: ReviewType[]) => ({ payload: value }));
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getLogin = createAction('GET_LOGIN', (value) => ({ payload: value }));
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const loadOffersNearby = createAction<OfferType[]>('data/loadOffersNearby');
export const getOfferId = createAction('GET_OFFER_ID', (value) => ({ payload: value }));
