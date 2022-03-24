import { MouseEvent } from 'react';

type ButtonPropsType = {
  isFavorite: boolean,
  isSmall: boolean,
  handleFavoriteButtonClick: (evt: MouseEvent<HTMLButtonElement>) => void,
}

function FavoriteButton({ handleFavoriteButtonClick, isFavorite, isSmall }: ButtonPropsType): JSX.Element {

  return (
    <button
      className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={handleFavoriteButtonClick}
    >
      <svg
        className="place-card__bookmark-icon"
        width={isSmall ? '18' : '31'}
        height={isSmall ? '19' : '33'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
