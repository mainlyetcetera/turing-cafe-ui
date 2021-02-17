import React from 'react'
import Reservation from '../Reservation/Reservation.js'

const Reservations = data => {
  return data.map(piece => <Reservation />)
}

export default Reservations
