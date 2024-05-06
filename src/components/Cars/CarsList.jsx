import cars from '@/data/cars11111.json';
import CarItem from '@/components/Cars/CarItem.jsx';
import style from '@/components/Cars/Cars.module.css'

const CarsList = () => {
  return (
      <div className={style.container}>
        <ul className={style.list}>
          {cars.map((car, id) => (<CarItem key={car.id}
                                           car={car}>{car.brand}</CarItem>))}
        </ul>
      </div>

  );
};

export default CarsList