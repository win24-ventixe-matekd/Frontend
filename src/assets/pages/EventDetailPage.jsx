import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageContext } from '../contexts/PageContext'
import EventPackage from '../Components/EventPackage'

const EventDetail = () => {
  const {id} = useParams()
  const [event, setEvent] = useState(null)

  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Event Details")
  }, [])

  const getDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    date = new Date(date)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
  }

  const getLowestPrice = () => {
    if (event.packages.length > 0) {
      event.packages.sort((a, b) => a.price - b.price)
      if (event.packages[0].currency === "$")
        return `${event.packages[0].currency}${event.packages[0].price}`
      else
        return `${event.packages[0].price}${event.packages[0].currency}`
    }
    return "N/A"
  }

  const fetchData = async () => {
    const res = await fetch(`https://eventservice-matekd.azurewebsites.net/api/Events/${id}`)
    if (res.ok) {
      const response = await res.json()
      
      setEvent(response.result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='event-detail'>
        {event !== null && 
          <div className="event">
            <div className='top'></div>

            <div className="main">
              <h4 className='title'>{event.title}</h4>

              <div className="middle">
                <div className='when-where'>
                  <p className='time'>{getDate(event.date)}</p>
                  <p className='location'>{event.location}</p>
                </div>
                {/* Lowest package price / free? */}
                <div className="price">
                  <p>Starts from</p>
                  <h6>{getLowestPrice()}</h6>
                </div>
              </div>

              <div className="about">
                <h6>About {event.title}</h6>
                <p className="description">{event.description}</p>
              </div>

              {/* <button className='btn primary'>Book</button> */}
            </div>
          </div>
        }
        {(event !== null && event.packages.length > 0) &&
          <div className="packages">
            <p className='header'>Packages</p>
            <div className="list">
              {event.packages.length > 0 && event.packages.map(eventPackage => (
                <EventPackage key={eventPackage.id} {...eventPackage} />
              ))}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default EventDetail