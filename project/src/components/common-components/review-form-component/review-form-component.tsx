import { FormEvent, ChangeEvent, useState } from 'react';

import Rating from '../rating-component/rating-component';

import { postReviewAction } from '../../../store/api-actions/api-actions';
import { loadReviewsAction } from '../../../store/api-actions/api-actions';
import { useAppDispatch } from '../../../hooks';

import { ReviewWithIdType } from '../../../types/review-type';
import { OfferType } from '../../../types/offer-type';

type ReviewFormType = {
  currentOffer: OfferType;
  currentId: string;
}

const COMMENTS_LENGTH_MIN = 1;
const COMMENTS_LENGTH_MAX = 50;

function ReviewForm({ currentOffer, currentId }: ReviewFormType): JSX.Element {

  const [prevReview, setReview] = useState<string>('');
  const [prevRating, setRating] = useState<number>(0);

  const dispatch = useAppDispatch();

  const getRating = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));
  const getComment = (evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value);

  const onSubmit = (reviewData: ReviewWithIdType) => {
    dispatch(postReviewAction(reviewData));
    dispatch(loadReviewsAction(Number(currentId)));
    setRating(0);
    setReview('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      comment: prevReview,
      rating: prevRating,
      id: Number(currentId),
    });

    event.currentTarget.reset();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating getRating={getRating} rating={prevRating} />
      <textarea
        onChange={getComment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={prevReview}
        minLength={COMMENTS_LENGTH_MIN}
        maxLength={COMMENTS_LENGTH_MAX}
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
        <button className="reviews__submit form__submit button" type="submit">Submit
        </button>
      </div>
    </form >
  );
}

export default ReviewForm;


