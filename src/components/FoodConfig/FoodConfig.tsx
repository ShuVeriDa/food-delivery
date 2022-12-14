import {FC} from 'react';

import styles from './FoodConfig.module.scss';
import {FavoriteSVG, ViewsSVG} from "../SvgComponent";
import {AddToFavoritesTC} from "../../redux/food/food.actions";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../redux/store";

interface IFoodConfigProps {
  types: number[] | null
  activeType: number
  activeSize: number
  setActiveType: (activeType: number) => void
  setActiveSize: (activeSize: number) => void
  typesName: string[]
  sizes: number[] | null
  favorites: number
  views: number
  id: string

}

export const FoodConfig: FC<IFoodConfigProps> = (
    {
     id, types, views, favorites, sizes, typesName,
      activeType, setActiveType, setActiveSize, activeSize
    }) => {

  const dispatch = useDispatch<AppDispatchType>()

  const onClickAddToFavorites = () => {
    dispatch(AddToFavoritesTC(id))
  }

    return (
      <div className={styles.foodConfig}>
        {types?.length && sizes?.length ? <div className="pizzaBlockSelector">
            <ul>
              {types.map((type) => (
                <li key={type}
                    className={activeType === type ? 'active' : ''}
                    onClick={() => setActiveType(type)}
                >
                  {typesName[type]}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((size, i) => (
                <li key={size}
                    className={activeSize === i ? 'active' : ''}
                    onClick={() => setActiveSize(i)}
                >
                  {size} см.
                </li>
              ))}
            </ul>
          </div>
          : ''}
        <div className={styles.favoritesAndViews}>
          <span className={styles.favAndViews} onClick={onClickAddToFavorites}>
           <FavoriteSVG styles={styles.svg}/>
            <span>{favorites}</span>

          </span>
          <span className={styles.favAndViews}>
            <ViewsSVG styles={styles.svg}/>
            {views}
          </span>
        </div>
      </div>
    )
  }
;