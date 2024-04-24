import style from './Cars.module.css';
import {startTransition, useState} from 'react';
import Button from '@/components/Button/Button.jsx';

const CarItem = ({
                   car,
                   children,
                 }) => {
  // console.log(car);
  const [stateCard, setStateCard] = useState(false);
  return (
      <div className={style.container}>
        <li className={style.list}>
          <div>
            <img src={car.photo}
                 width={400}
                 alt=""/>
          </div>

          <div className={style.cardBody}>
            <p >
              {car.children}
            </p>
            <button className={style.btn} onClick={() => {
              setStateCard(prevState => !prevState)
            }}>Детальніше
            </button>
            <div style={stateCard
                ? {display: 'block'}
                : {display: 'none'}}>
              {car.description}
            </div>
          </div>
        </li>
      </div>

  );
};

export default CarItem;

// "id": 3,
//     "brand": "Ford",
//     "model": "Mustang",
//     "year": 2021,
//     "color": "black",
//     "photo": "https://example.com/ford_mustang.jpg"