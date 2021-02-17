import React from 'react'

const Reservation = ({reservation}) => {
  const {id, name, date, time, number} = reservation
  return ( 
    <div
      key={id}
    >
      name={name}
      date={date}
      time={time}
      number={number}
    </div>
  )
}

export default Reservation
