import React from "react";
import CarItem06 from "@/styles/components/CarItem06.jsx";

const CarList06 = ({cars, deleteCar}) => {
    return (
        <>
            <ul>
                {cars.map((car, id) => (
                    <CarItem06 key={id} car={car} deleteCar={deleteCar}/>

                    ))
                }
            </ul>
        </>
    );
};
export default CarList06