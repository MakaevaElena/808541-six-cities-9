import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer-type';
import { FavoriteType } from '../types/favorite-type';

export const setCity = createAction<string>('MainScreen/setSity');
export const setOffers = createAction<OfferType[]>('MainScreen/setOffers');
export const setSortType = createAction<string>('MainScreen/setSortType');
export const loadOffers = createAction<OfferType[]>('loadOffers');
export const loadFavorite = createAction<FavoriteType[]>('data/fetchFavorite');
