import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../contexts/PageContext'
import BookingItem from '../Components/BookingItem'

const Bookings = () => {
  const [bookings, setBookings] = useState([])
  const {setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Bookings")
  }, [])

  const fetchData = async () => {
    const res = await fetch("https://bookingservice-matekd.azurewebsites.net/api/Bookings")
    if (res.ok) {
      const response = await res.json()
      
      setBookings(response.result)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='booking-list'>
      {bookings.length > 0 && bookings.map(booking => (
        <BookingItem key={booking.id} {...booking} firstName={booking.user.firstName} lastName={booking.user.lastName}  />
      ))}
    </section>
  )
}

export default Bookings