import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations />
        </div>
      </div>
    )
  }
}

export default App;
