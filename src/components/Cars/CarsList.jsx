import cars from '@/data/cars.json';
import CarItem from '@/components/Cars/CarItem.jsx';

const CarsList = () => {
  // console.log(cars);
  return (
      <ul>
        {cars.map((car, id) => (<CarItem key={id} car={car}>{car.brand}</CarItem>))}
      </ul>
  );
};

export default CarsList