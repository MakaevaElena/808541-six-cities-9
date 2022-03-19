import { ChangeEvent, Fragment } from 'react';

type RatingProps = {
  getRating: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number;
}

const MAX_RATING_VALUE = 5;
const ratingValues = new Array(MAX_RATING_VALUE).fill(null).map((_, index) => index + 1).sort((a, b) => b - a);

enum RatingName {
  'Terribly',
  'Badly',
  'Not bad',
  'Good',
  'Perfect',
}

function Rating({ rating, getRating }: RatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating" >
      {
        ratingValues.map((rank) => (
          <Fragment key={rank}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rank}
              id={`rating-${rank}-star`}
              type="radio"
              checked={rank === rating}
              onChange={getRating}
            />
            <label
              htmlFor={`rating-${rank}-star`}
              className="reviews__rating-label form__rating-label"
              title={RatingName[rank - 1].toLowerCase()}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}
export default Rating;


