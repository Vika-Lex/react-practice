import style from './Cars.module.css'
import {startTransition, useEffect, useState} from 'react';
import Button from '@/components/Button/Button.jsx';

const CarItem = ({car,children}) => {
  console.log(car);
  const [state, setState] = useState(false);

  return (
      <li>
        <div>
          <img src={car.photo}
               width={50}
               alt=""/>
        </div>

        <div className={style.cardBody}>
         <p>
            {children}
          </p>
          <Button>Детальніше</Button>
        </div>
      </li>

  )
}

export default CarItem

// "id": 3,
//     "brand": "Ford",
//     "model": "Mustang",
//     "year": 2021,
//     "color": "black",
//     "photo": "https://example.com/ford_mustang.jpg"