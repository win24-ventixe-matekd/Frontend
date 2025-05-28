import React, { useState, useEffect } from 'react'
import EventItem from './EventItem'

const EventList = () => {

  const [events, setEvents] = useState([
    {
      id: 1, 
      title: "Test Festival", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam officia nobis provident. Accusantium repellat tempore, ratione eos possimus veniam suscipit in harum at, delectus doloremque. Deserunt iste fugiat illum alias error deleniti officia ab perspiciatis, adipisci officiis pariatur qui.",
      location: "Building, City, Country",
      datetime: Date.now(),
      price: "$123"
    },
    {
      id : 2, 
      title: "Testing Wellness Summit", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit sequi sunt distinctio quos enim. Quo rerum itaque consequatur. Dolore.",
      location: "Building, City, Country",
      datetime: new Date("July 21, 1983 01:15:00"),
      price: "$1234"
    },
    {
      id: 3, 
      title: "Test Expo", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident, soluta hic nemo in quod?",
      location: "Building, City, Country",
      datetime: Date(),
      price: "$12345"
    },
  ])

  const fetchData = async () => {
    const res = await fetch("")
    const data = await res.json()
    setEvents(data)
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <div className='event-list'>
      {events.length > 0 && events.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  )
}

export default EventList