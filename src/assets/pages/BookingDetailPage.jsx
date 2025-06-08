import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../contexts/PageContext'
import { useParams } from 'react-router-dom'

const BookingDetailPage = () => {
  const {id} = useParams()
  const [booking, setBooking] = useState({})

  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Booking Details")
  }, [])

  const fetchData = async () => {
      const res = await fetch(`https://bookingservice-matekd.azurewebsites.net/api/Bookings/${id}`)
      if (res.ok) {
        const response = await res.json()
  
        setBooking(response.result)
      }
    }
  
  useEffect(() => {
    fetchData()
  }, [])

  const formatCurrency = (currency, price) => {
    if (currency === "$")
      return `${currency}${price}`
    return `${price}${currency}`
  }

  return (
    <>
      {booking !== null &&
      <div className="detail">
        <p className="date">{Date(booking.eventDate)}</p>
        <p className="full-name">{booking.firstName} {booking.lastName}</p>
        <p className="event">{booking.eventName}</p>
        <p className="package-name">{booking.packageName}</p>
        <p className="price">{formatCurrency(booking.currency, booking.packagePrice)}</p>
        <p className="amount">Qty: {booking.amount}</p>
      </div>
      }
    </>
  )
}

export default BookingDetailPage