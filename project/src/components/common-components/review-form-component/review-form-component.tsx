import { ChangeEvent, useState } from 'react';
import Rating from '../rating-component/rating-component';

function ReviewForm(): JSX.Element {
  const [prevComment, setComment] = useState<string>('');
  const [prevRaving, setRating] = useState<number>(0);

  const getRating = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  };

  const getComment = (evt: { target: { value: string } }) => {
    const { value } = evt.target;
    setComment(value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating getRating={getRating} rating={prevRaving} />
      <textarea
        onChange={getComment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={prevComment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span>
          and describe your stay with at least
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={!((prevRaving > 0) && (prevComment.length >= 50))}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;


