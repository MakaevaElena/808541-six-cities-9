import PlaceCard from '../place-card-component/place-card-component';
import { OfferType } from '../../../types/offer-type';
import { useState } from 'react';

type CardsListType = {
  offers: OfferType[];
}

function CardsList({ offers }: CardsListType): JSX.Element {

  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            getOfferId={() => setActiveCardId(offer.id)}
            resetOfferId={() => setActiveCardId(0)}
            activeCardId={activeCardId}
          />))
      }
    </div>
  );
}

export default CardsList;
