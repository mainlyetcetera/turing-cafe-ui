import React from 'react'
import './Reservation.css'

const Reservation = ({reservation}) => {
  const {id, name, date, time, number} = reservation
  return ( 
    <article
      className='reservation'
      key={id}
    >
      Name: {name}
      Date: {date}
      Time: {time}
      Number: {number}
    </article>
  )
}

export default Reservation
