import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageContext } from '../contexts/PageContext'

const BookEvent = () => {
  const {id} = useParams()
  const [selectedPackage, setSelectedPackage] = useState({
    event: {
      title: "",
      date: "",
      location: "",
    }
  })
  
  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Book Event")
  }, [])

  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    packageName: "",
    packagePrice: "",
    currency: "",
    amount: 1,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: ""
  })

  const fetchData = async () => {
    // get from package controller
    // package.evevt
    const res = await fetch(`${id}`)
    if (res.ok) {
      const response = await res.json()

      setSelectedPackage(response.result)
    }
  }

  useEffect(() => {
    // fetchData()
  }, [])

  const postBooking = async () => {
    const res = await fetch("", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // await postBooking()
    // post to booking api
  }

  return (
    <div className="book-event">
      <div className="info">
        <h6 className="event-name">Event</h6>
        <h6 className="package-name">Package</h6>
        <p className="price">123kr</p>
      </div>
      <form className="book-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" value={selectedPackage.event.title} name='eventName' />
        <input type="hidden" value={selectedPackage.event.date} name='eventDate' />
        <input type="hidden" value={selectedPackage.event.location} name='eventLocation' />
        <input type="hidden" value={selectedPackage.name} name='packageName' />
        <input type="hidden" value={selectedPackage.price} name='packagePrice' />
        <input type="hidden" value={selectedPackage.currency} name='currency' />

        <label>Amount
          <input type="number" defaultValue={1} value={selectedPackage.amount} name='amount' onChange={handleChange} required />
        </label>
        <label> First Name
          <input type="text" value={selectedPackage.firstName} name='firstName' onChange={handleChange} required />
        </label>
        <label> Last Name
          <input type="text" value={selectedPackage.lastName} name='lastName' onChange={handleChange} required />
        </label>
        <label> Email
          <input type="email" value={selectedPackage.email} name='email' onChange={handleChange} required />
        </label>
        <label> Street Name
          <input type="text" value={selectedPackage.streetName} name='streetName' onChange={handleChange} required />
        </label>
        <label> Postal Code
          <input type="text" value={selectedPackage.postalCode} name='postalCode' onChange={handleChange} required />
        </label>
        <label> City
          <input type="text" value={selectedPackage.city} name='city' onChange={handleChange} required />
        </label>

        <button className='btn primary' type="submit">Book</button>
      </form>
    </div>
  )
}

export default BookEvent