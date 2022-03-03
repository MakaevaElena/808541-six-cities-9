import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { useEffect, useRef } from 'react';
import { CityType, OfferType } from '../../types/offer-type';

import defaultPin from './img/pin.svg';
import activePin from './img/pin-active.svg';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedOffer: number | null;
}

const defaultIconPin = new Icon({
  iconUrl: defaultPin,
  iconSize: [28, 40],
  iconAnchor: [14, 20],
});

const activeIconPin = new Icon({
  iconUrl: activePin,
  iconSize: [28, 40],
  iconAnchor: [14, 20],
});

function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker.setIcon(selectedOffer && offer.id === selectedOffer ? activeIconPin : defaultIconPin).addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
