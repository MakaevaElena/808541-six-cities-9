import { Icon } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { useEffect, useRef } from 'react';
import { CityType, OfferType } from '../../../types/offer-type';
import leaflet from 'leaflet';

import defaultPin from './/img/pin.svg';
import activePin from './/img/pin-active.svg';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedOffer: number | null;
}

const defaultIconPin = new Icon({
  iconUrl: defaultPin,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const activeIconPin = new Icon({
  iconUrl: activePin,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

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

      // marker.setIcon(offer.id === selectedOffer ? activeIconPin : defaultIconPin)
      //   .addTo(map);
      // });
    }
  }, [map, offers, selectedOffer]);

  return <section style={{ height: '100%' }} ref={mapRef}></section>;
}

export default Map;
