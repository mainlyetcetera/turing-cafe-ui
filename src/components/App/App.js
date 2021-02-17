import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations.js'
import Form from '../Form/Form.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = toAdd => {
    this.setState({
      reservations: [...this.state.reservations, toAdd]
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ 
      reservations: data
    }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <form className='resy-form'>
          <Form 
            addReservation={this.addReservation}
          />
        </form>
        <section className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </section>
      </div>
    )
  }
}

export default App;
