import React, { useState, useEffect } from 'react'
import EventItem from './EventItem'

const EventList = () => {

  const [events, setEvents] = useState([])

  const fetchData = async () => {
    const res = await fetch("https://eventservice-matekd.azurewebsites.net/api/Events")
    if (res.ok) {
      const response = await res.json()

      setEvents(response.result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='event-list'>
      {events.length > 0 && events.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </section>
  )
}

export default EventList