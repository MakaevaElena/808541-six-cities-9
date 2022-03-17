import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../index';
import { OfferType } from '../../types/offer-type';
import { FavoriteType } from '../../types/favorite-type';
import { ReviewType, ReviewWithIdType, ReviewDataType } from '../../types/review-type';
import { loadOffers, loadFavorites, requireAuthorization, redirectToRoute, loadOffersNearby, loadReviews, loadCurrentOffer } from '../action';
import { saveToken, dropToken } from '../../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { errorHandle } from '../../services/error-handle';

export const loadOfferAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadFavoriteAction = createAsyncThunk(
  'data/favorite',
  async () => {
    try {
      const { data } = await api.get<FavoriteType[]>(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadOfferNearbyAction = createAsyncThunk(
  'data/loadOffersNearby',
  async (id: number) => {
    try {
      const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadOffersNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadReviewsAction = createAsyncThunk(
  'data/loadReviews',
  async (id: number) => {
    try {
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

// export const loadCurrentOfferCommentsAction = createAsyncThunk(
//   'data/loadCurrentOfferComments',
//   async (id: number) => {
//     try {
//       const { data } = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${id}`);
//       store.dispatch(loadCurrentOfferComments(data));
//     } catch (error) {
//       errorHandle(error);
//     }
//   },
// );

export const loadCurrentOfferAction = createAsyncThunk(
  'data/loadCurrentOffer',
  async (id: number) => {
    try {
      const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadCurrentOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const newCommentAction = createAsyncThunk(
  'user/newComment',
  async ({ comment, rating, id }: ReviewWithIdType) => {
    try {
      await api.post<ReviewDataType>(`${APIRoute.Reviews}/${id}`, { comment, rating });
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
