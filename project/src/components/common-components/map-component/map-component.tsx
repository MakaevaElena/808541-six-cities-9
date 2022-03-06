import { Icon } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { useEffect, useRef } from 'react';
import { CityType, OfferType } from '../../../types/offer-type';
import leaflet from 'leaflet';

import defaultPin from './img/pin.svg';
import activePin from './img/pin-active.svg';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedOffer: number | null;
}

const getIcon = (url: string) => new Icon({
  iconUrl: url,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const defaultIconPin = getIcon(defaultPin);
const activeIconPin = getIcon(activePin);

function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: (offer.id === selectedOffer)
              ? activeIconPin
              : defaultIconPin,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer, city]);

  return <section style={{ height: '100%' }} ref={mapRef}></section>;
}

export default Map;
