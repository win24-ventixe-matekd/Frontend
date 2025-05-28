import React from 'react'
import { NavLink } from 'react-router-dom'

const EventItem = ({id, title, location, datetime, price}) => {
  const getDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    date = new Date(date)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
  }

  return (
    <div className='event-item'>
      <div className="img"></div>

      <p className='time'>{getDate(datetime)}</p>
      <p className='title'>{title}</p>
      <p className='location'>{location}</p>
      <div className="bottom">
        <NavLink className="btn primary" to={`/events/${id}`}>More Details</NavLink>
        <p className='price'>{price}</p>
      </div>
    </div>
  )
}

export default EventItem