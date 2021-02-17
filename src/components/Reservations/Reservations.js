import React from 'react'
import Reservation from '../Reservation/Reservation.js'

const Reservations = ({reservations}) => {
  console.log('reservations', reservations)
  return reservations.map(reservation => <Reservation />)
}

export default Reservations
