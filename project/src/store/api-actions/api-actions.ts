import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../index';
import { OfferType } from '../../types/offer-type';
import { FavoriteType } from '../../types/favorite-type';
import { loadOffers, loadFavorite, requireAuthorization, redirectToRoute, loadOffersNearby } from '../action';
import { saveToken, dropToken } from '../../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { errorHandle } from '../../services/error-handle';
// import { useAppSelector } from '../../hooks';

const loadOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const loadFavoriteAction = createAsyncThunk(
  'data/favorite',
  async () => {
    try {
      const { data } = await api.get<FavoriteType[]>(APIRoute.Favorite);
      store.dispatch(loadFavorite(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const checkAuthAction = createAsyncThunk(
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

const loginAction = createAsyncThunk(
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

const logoutAction = createAsyncThunk(
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

const loadOfferNearbyAction = createAsyncThunk(
  'data/fetchOffersNearby',
  async (id: number) => {
    try {
      // const currentId = useAppSelector((state) => state.offerId);
      const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadOffersNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export { loadOfferAction, loadFavoriteAction, checkAuthAction, loginAction, logoutAction, loadOfferNearbyAction };
