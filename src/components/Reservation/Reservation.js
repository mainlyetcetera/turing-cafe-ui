import React from 'react'
import './Reservation.css'

const Reservation = ({reservation}) => {
  const {id, name, date, time, number} = reservation
  return ( 
    <div
      className='reservation'
      key={id}
    >
      Name: {name}
      Date: {date}
      Time: {time}
      Number: {number}
    </div>
  )
}

export default Reservation
