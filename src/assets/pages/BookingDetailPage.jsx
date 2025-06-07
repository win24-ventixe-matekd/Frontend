import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../contexts/PageContext'

const BookingDetailPage = () => {
  const [booking, setBooking] = useState({})

  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Booking Details")
  }, [])

  const fetchData = async () => {
      const res = await fetch("")
      if (res.ok) {
        const response = await res.json()
  
        setBooking(response.result)
      }
    }
  
    useEffect(() => {
      // fetchData()
    }, [])

  return (
    <div>BookingDetailPage</div>
  )
}

export default BookingDetailPage