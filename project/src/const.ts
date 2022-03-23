export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Offer = '/offer/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum RatingName {
  'Terribly',
  'Badly',
  'Not bad',
  'Good',
  'Perfect',
}

export enum NameSpace {
  data = 'DATA',
  offers = 'OFFERS',
  user = 'USER',
}

export const MAX_RATING = 5;
export const RATING_VALUES = [5, 4, 3, 2, 1];
export const PERSENT = 100;
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
