import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const BookEvent = () => {
  const {id} = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({})

  return (
    <div>BookEvent</div>
  )
}

export default BookEvent