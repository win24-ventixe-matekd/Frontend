import React from 'react'
import { NavLink } from 'react-router-dom'

const EventItem = ({id, title, location, date}) => {
  const getDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let minutes = date.getMinutes()
    if (minutes.toString().length === 1)
      minutes = "0" + minutes
    
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${minutes}`
  }

  return (
    <div className='event-item'>
      <div className="img"></div>

      <p className='time'>{getDate()}</p>
      <p className='title'>{title}</p>
      <p className='location'>{location}</p>
      <NavLink className="btn primary" to={`/events/${id}`}>More Details</NavLink>
      {/* <div className="bottom">
        <p className='price'>N/A</p>
      </div> */}
    </div>
  )
}

export default EventItem