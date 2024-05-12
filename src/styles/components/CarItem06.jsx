import React from "react";

const CarItem06 = ({car, deleteCar}) => {

    return (
        <>
            <li>
                <div>
                    <img src={car.imageUrl}
                         alt=''
                         width='200'
                    />
                </div>
                <div>{car.carName}</div>
                <div>{car.year}</div>
                <div>{car.price}</div>
                <button onClick={()=>deleteCar(car.id)}>Delete car</button>
            </li>
        </>
    );
};
export default CarItem06
