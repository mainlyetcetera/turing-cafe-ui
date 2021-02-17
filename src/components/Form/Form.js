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
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={event => this.handleChange(event)}
      />
    )
  }
}

