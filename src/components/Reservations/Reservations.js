import React from 'react'
import Reservation from '../Reservation/Reservation.js'

const Reservations = ({reservations}) => {
  return reservations.map(reservation => 
    <Reservation 
      reservation={reservation}
    />)
}

export default Reservations
