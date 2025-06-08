import React from 'react'
import { NavLink } from 'react-router-dom'

const BookingItem = ({id, eventDate, firstName, lastName, eventName, packageName, packagePrice, amount, currency}) => {
 
  const formatCurrency = (currency, price) => {
    if (currency === "$")
      return `${currency}${price}`
    return `${price}${currency}`
  }
 
  return (
    <div className="booking">
      <p className="date">{Date(eventDate)}</p>
      <p className="full-name">{firstName} {lastName}</p>
      <p className="event">{eventName}</p>
      <p className="package-name">{packageName}</p>
      <p className="price">{formatCurrency(currency, packagePrice)}</p>
      <p className="amount">Qty: {amount}</p>
      <NavLink to={`/bookings/${id}`}>Details</NavLink>
    </div>
  )
}

export default BookingItem