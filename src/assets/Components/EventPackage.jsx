import React from 'react'
import { NavLink } from 'react-router-dom'

const EventPackage = ({id, name, price, currency, seating, description}) => {
  const formatCurrency = () => {
    if (currency === "$")
      return `${currency}${price}`
    return `${price}${currency}`
  }

  return (
    <NavLink className='event-package' to={`/events/booking/${id}`}>
      <p className="name">{name}</p>
      <p className="seating">{seating}</p>
      <p className="description">{description}</p>
      <p className="price">{formatCurrency()}</p>
    </NavLink>
  )
}

export default EventPackage