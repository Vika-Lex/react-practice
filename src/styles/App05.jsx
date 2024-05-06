import React, {Component} from 'react';
import contacts from '@/data/contacts.json'
import Counter from '@/components/Counter/Counter.jsx';
class App05 extends Component {
  state= {
    contacts: contacts,
    inputFilter:'',
    number: 0
  }


  handleChangeInput = (event) => {
    this.setState(prevState => {
      return {
        ...prevState, inputValue: event.target.value
      }
    })
  }

  deleteContact = (id) => {
    console.log(id);
    this.setState(prevState=> {
      return {...prevState, contacts: prevState.contacts.filter(contact => contact.id !== id)}
    })
  }

  handleSubmitForm =(event) => {
    event.preventDefault()
    const newUser = {
      id: Date.now(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value
    }
    console.log(newUser);
    this.setState(prevState=> {
      return {...prevState, contacts: [...prevState.contacts, newUser]}
    })
    // console.log(event.target.elements.user.value);
    // console.log(event.target.elements.email);
    // console.log(event.target.elements.password);
  }

  incrementNumber = () => {
    this.setState(prevState => ({
      ...prevState,number:prevState.number+1
    }))
  }


  decrementNumber = () => {
    this.setState(prevState => ({
      ...prevState,number:prevState.number-1
    }))
  }


  render() {


      let filter = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()))




    return (
        <>
          <form onSubmit={this.handleSubmitForm}>
            <input type="text"
                   name="name" />
            <input type="text"
                  name="number" />

            <button type='submit'>Send</button>
          </form>

          <input onChange={(e)=>this.setState(prevState => {
            return {
              ...prevState,inputFilter:e.target.value
            }
          })} value={this.state.inputFilter} type="text"/>

          <ul >
            {filter.map((contact,id) => (
                <li key={id}>
                  <h2>Name: {contact.name}</h2>
                  <p>Number: {contact.number}</p>
                  <button onClick={(e)=>{this.deleteContact(contact.id)}}>Delete</button>
                </li>
            ))}
          </ul>

          <Counter number={this.state.number} plusNumber={this.incrementNumber} minusNumber={this.decrementNumber}/>



        </>
    );
  }
}

export default App05;
