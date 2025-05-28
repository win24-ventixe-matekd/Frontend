import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageContext } from '../contexts/PageContext'

const EventDetail = () => {
  const {id} = useParams("id")
  const [event, setEvent] = useState(
    {
      id: 1, 
      title: "Test Festival", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam officia nobis provident. Accusantium repellat tempore, ratione eos possimus veniam suscipit in harum at, delectus doloremque. Deserunt iste fugiat illum alias error deleniti officia ab perspiciatis, adipisci officiis pariatur qui.",
      location: "Building, City, Country",
      datetime: Date.now(),
      price: "$123"
    }
  )

  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Event Details")
  }, [])

  const getDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    date = new Date(date)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
  }

  const fetchData = async () => {
    const res = await fetch("")
    const data = await res.json()
    setEvent(data)
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <div className='event-detail'>
      <div className='top'></div>

      <div className="main">
        <h4 className='title'>{event.title}</h4>

        <div className="middle">
          <div className='when-where'>
            <p className='time'>{getDate(event.datetime)}</p>
            <p className='location'>{event.location}</p>
          </div>
          <h6 className='price'>{event.price}</h6>
        </div>

        <div className="about">
          <h6>About {event.title}</h6>
          <p className="description">{event.description}</p>
        </div>

        <button className='btn primary'>Book</button>
      </div>
    </div>
  )
}

export default EventDetail