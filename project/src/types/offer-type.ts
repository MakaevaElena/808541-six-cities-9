type LocationType = {
  latitude: number
  longitude: number
  zoom: number
}

type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

type CityType = {
  location: LocationType
  name: CityName;
}

type HostType = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type OfferType = {
  bedrooms: number
  city: CityType
  description: string
  goods: string[]
  host: HostType
  id: number
  images: string[]
  isFavorite: boolean
  isPremium: boolean
  location: LocationType
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
};
