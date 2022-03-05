import PlaceCard from '../place-card-component/place-card-component';
import { OfferType } from '../../../types/offer-type';
import { useState } from 'react';

type CardsListType = {
  offers: OfferType[];
  onPlaceCardHover: (id: number | null) => void,
}

function CardsList({ offers, onPlaceCardHover }: CardsListType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  const handleCardActive = (valueId: number | null) => onPlaceCardHover(activeCardId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            getOfferId={handleCardActive}
            resetOfferId={() => setActiveCardId(0)}
            activeCardId={activeCardId}
          />))
      }
    </div>
  );
}

export default CardsList;
