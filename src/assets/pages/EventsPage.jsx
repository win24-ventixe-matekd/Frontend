import React, { useContext, useEffect } from 'react'
import { PageContext } from '../contexts/PageContext'
import EventList from '../Components/EventList'


const Events = () => {
  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Events")
  }, [])

  return (
    <>
      {/* <div className="main-header">
        <h4>Placeholder</h4>
      </div> */}
      <EventList />
    </>
  )
}

export default Events