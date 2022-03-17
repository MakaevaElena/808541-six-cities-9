import { FormEvent, ChangeEvent, useState, useRef } from 'react';
import Rating from '../rating-component/rating-component';
import { OfferType } from '../../../types/offer-type';
import { ReviewWithIdType } from '../../../types/review-type';
import { newCommentAction } from '../../../store/api-actions/api-actions';
import { loadReviewsAction } from '../../../store/api-actions/api-actions';
import { useAppDispatch } from '../../../hooks';

type ReviewFormType = {
  currentOffer: OfferType;
  currentId: string;
}

const COMMENTS_LENGTH_MIN = 1;
const COMMENTS_LENGTH_MAX = 50;

function ReviewForm({ currentOffer, currentId }: ReviewFormType): JSX.Element {

  // const [prevComment, setComment] = useState<string>('');
  const [prevRating, setRating] = useState<number>(0);
  const comment = useRef<HTMLTextAreaElement | null>(null);

  const getRating = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  };
  const dispatch = useAppDispatch();

  // const getComment = (evt: { target: { value: string } }) => {
  //   const { value } = evt.target;
  //   setComment(value);
  // };

  const onSubmit = (commentData: ReviewWithIdType) => {
    dispatch(newCommentAction(commentData));
    dispatch(loadReviewsAction(Number(currentId)));
    setRating(0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (prevRating !== 0 && comment.current !== null && currentOffer !== null) {
      onSubmit({
        comment: comment.current.value,
        rating: prevRating,
        id: currentOffer.id,
      });
    }
    event.currentTarget.reset();
  };

  // eslint-disable-next-line no-console
  // console.log('console', currentId);

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
        ref={comment}
        // onChange={getComment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        // value={prevComment}
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


