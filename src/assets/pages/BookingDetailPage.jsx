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

  return (
    <div>BookingDetailPage</div>
  )
}

export default BookingDetailPage