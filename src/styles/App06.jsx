import React, {Component} from 'react';
import cars from '@/data/cars.json'
import FormAddCar06 from "@/styles/components/FormAddCar06.jsx";
import CarList06 from "@/styles/components/CarList06.jsx";

class App06 extends Component {
    state = {
        cars: [],
        filter:''
    }
    // тут должен делаться обьект которые передается в вызов функции создать машину


    createCar = (car) => {
        this.setState(prevState => ({
        ...prevState, cars:[...prevState.cars, car]
        }))
    }

    deleteCar = (id) => {
        console.log(id);
        this.setState(prevState => {
            return {
                ...prevState,
                cars: prevState.cars.filter(car => car.id !== id)
            }
        })
    }
//вот функция которая отвечает за создание нового обьекта в массиве . Внимательно почитай и попробуй разобрать что она делает
    //Потом после того как ты вызываешь эту функцию в форме тебе нужно очистить данные формы .
    //Затепм передать этот массив в список и там отрендерить
    //В массиве получить данные по id на какой из лишек ті в данній момент нажимаешь
    //По итогу сделать фильтр и удалить из массива тот обьект у которого id совпадает с li

    /*createCar = (car) => {
      this.setState(prevState => ({
       ...prevState, cars:[...prevState.cars,car]
      }))
    }*/


    render() {

        return (
            <>
                <FormAddCar06 createCar={this.createCar}/>
                <CarList06 cars={this.state.cars} deleteCar={this.deleteCar}/>

            </>
        )
            ;
    }
}

export default App06;
