import PlaceCard from '../place-card-component/place-card-component';
import { OfferType } from '../../../types/offer-type';

type CardsListType = {
  offers: OfferType[];
}

function CardsList({ offers }: CardsListType): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <PlaceCard offer={offer} key={offer.id} />)
      }

    </div>
  );
}

export default CardsList;
