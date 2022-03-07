import { CITIES } from '../../../const';
import { capitalizeFirstLetter } from '../../../utils';
import { useAppDispatch } from '../../../hooks';
import { setCity } from '../../../store/action';

type CityListProps = {
  city: string;
}

function CityList({ city }: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((currentCity) => (
          <li className="locations__item" key={currentCity}>
            <a
              className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active' : ''}`}
              href="/"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(setCity(currentCity));
              }}
            >
              <span>{capitalizeFirstLetter(currentCity)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
