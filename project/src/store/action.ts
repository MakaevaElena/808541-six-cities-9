import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer-type';

export const setCity = createAction<string>('MainScreen/setSity');
export const setOffers = createAction<OfferType[]>('MainScreen/setOffers');
export const setSortType = createAction<string>('MainScreen/setSortType');
