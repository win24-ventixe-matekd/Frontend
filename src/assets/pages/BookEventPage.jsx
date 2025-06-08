import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageContext } from '../contexts/PageContext'

const BookEvent = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [sPackage, setsPackage] = useState(null)
  
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
    const res = await fetch(`https://eventservice-matekd.azurewebsites.net/api/Packages/${id}`)
    if (res.ok) {
      const response = await res.json()

      setsPackage(response.result)
      
      setFormData({...formData, 
        eventName: response.result.event.title,
        eventDate: response.result.event.date,
        eventLocation: response.result.event.location,
        packageName: response.result.name,
        packagePrice: response.result.price,
        currency: response.result.currency,
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = async (e) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("https://bookingservice-matekd.azurewebsites.net/api/Bookings", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      navigate("/")
    }
    else {
      // console.error(res)
    }
  }

  const formatCurrency = (currency, price) => {
    if (currency === "$")
      return `${currency}${price}`
    return `${price}${currency}`
  }

  return (
    <div className="book-event">
      {sPackage !== null && <>
        <div className="info">
          <h6 className="event-name">{sPackage.event.title}</h6>
          <h6 className="package-name">{sPackage.name}</h6>
          <p className="price">{formatCurrency(sPackage.currency, sPackage.price)}</p>
        </div>
        <form className="book-form" onSubmit={handleSubmit} >
          <input type="hidden" value={formData.eventName} name='eventName' onChange={handleChange} />
          <input type="hidden" value={formData.eventDate} name='eventDate' />
          <input type="hidden" value={formData.eventLocation} name='eventLocation' />
          <input type="hidden" value={formData.packageName} name='packageName' />
          <input type="hidden" value={formData.packagePrice} name='packagePrice' />
          <input type="hidden" value={formData.currency} name='currency' />
          
          <label>Amount
            <input type="number" defaultValue={1} value={sPackage.amount} name='amount' onChange={handleChange} required />
          </label>
          <label> First Name
            <input type="text" value={sPackage.firstName} name='firstName' onChange={handleChange} required />
          </label>
          <label> Last Name
            <input type="text" value={sPackage.lastName} name='lastName' onChange={handleChange} required />
          </label>
          <label> Email
            <input type="email" value={sPackage.email} name='email' onChange={handleChange} required />
          </label>
          <label> Street Name
            <input type="text" value={sPackage.streetName} name='streetName' onChange={handleChange} required />
          </label>
          <label> Postal Code
            <input type="text" value={sPackage.postalCode} name='postalCode' onChange={handleChange} required />
          </label>
          <label> City
            <input type="text" value={sPackage.city} name='city' onChange={handleChange} required />
          </label>

          <button className='btn primary' type="submit">Book</button>
        </form>
      </>}
    </div>
  )
}

export default BookEvent