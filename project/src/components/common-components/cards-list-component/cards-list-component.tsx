import PlaceCard from '../place-card-component/place-card-component';

import { OfferType } from '../../../types/offer-type';

type CardsListType = {
  offers: OfferType[];
  onPlaceCardHover: (id: number | null) => void,
}

function CardsList({ offers, onPlaceCardHover }: CardsListType): JSX.Element {
  const handleCardActive = (valueId: number | null) => onPlaceCardHover(valueId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            getOfferId={handleCardActive}
          />))
      }
    </div>
  );
}

export default CardsList;
