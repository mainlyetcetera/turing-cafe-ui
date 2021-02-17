import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          name='date'
          placeholder='Date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          name='number'
          placeholder='Number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
      </div>
    )
  }
}

