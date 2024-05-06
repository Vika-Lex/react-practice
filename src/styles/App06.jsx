import React, {Component} from 'react';
import cars from '@/data/cars.json'

class App06 extends Component {
state = {
  cars: [],
  imageUrl: '',
  carName: '',
  year: '',
  price: ''
}

handleSubmitForm = (event) => {
  event.preventDefault()
  const newCar = {
    id: Date.now(),
    imageUrl: event.target.elements.imageUrl.value,
    carName: event.target.elements.carName.value,
    year: event.target.elements.year.value,
    price: event.target.elements.price.value
  }
  console.log(newCar);

  this.setState(prevState => {
    return {...prevState, cars: [...prevState.cars, newCar]}
  })


}
  render() {
    return (
        <>
          <form onSubmit={this.handleSubmitForm} action="">
            <div>
              <input type="text"
                     name="imageUrl"
              />
              <button>Delete</button>
            </div>
            <div>
              <input type="text"
                     name="carName"
              />
              <button>Delete</button>
            </div>
            <div>
              <input type="text"
                     name="year"
              />
              <button>Delete</button>
            </div>
            <div>
              <input type="text"
                     name="price"
              />
              <button>Delete</button>
            </div>
            </form>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </>
    );
  }
}

export default App06;
