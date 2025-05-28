import React, { useContext, useEffect } from 'react'
import { PageContext } from '../contexts/PageContext'

const Bookings = () => {
  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Bookings")
  }, [])

  return (
    <div>Bookings</div>
  )
}

export default Bookings