import React from "react";

const FormAddCar06 = ({createCar}) => {
    const handleSubmitForm = (event) => {
        event.preventDefault()
        const newCar = {
            id: Date.now(),
            imageUrl: event.target.elements.imageUrl.value,
            carName: event.target.elements.carName.value,
            year: event.target.elements.year.value,
            price: event.target.elements.price.value
        }
        createCar(newCar)
        console.log(newCar)
    }

    return (
        <form onSubmit={handleSubmitForm}
                  action=""
            >

                <input type="text"
                       name="imageUrl"
                       value="https://img.automoto.ua/overview/toyota-corolla-2020-304-huge-1542.jpg"
                       placeholder='ссылка на картинку'
                />

                <input type="text"
                       name="carName"
                       placeholder='название машины'
                />
                <input type="text"
                       name="year"
                       placeholder='год выпуска'
                />

                <input type="text"
                       name="price"
                       placeholder='цена машины'

                />
                <button type='submit'>
                    Add car
                </button>
            </form>

    );
};
export default FormAddCar06