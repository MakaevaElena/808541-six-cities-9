import PlaceCard from '../place-card-component/place-card-component';
import { OfferType } from '../../../types/offer-type';
import { useState } from 'react';

type CardsListType = {
  offers: OfferType[];
}

function CardsList({ offers }: CardsListType): JSX.Element {

  const [, setActiveCardId] = useState<null | number>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            onMouseOver={() => setActiveCardId(offer.id)}
            onMouseLeave={() => setActiveCardId(null)}
          />))
      }
    </div>
  );
}

export default CardsList;
