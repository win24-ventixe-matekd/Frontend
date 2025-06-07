import React, { useContext } from 'react'
import Logo from '../images/ventixe-logo.svg'
import { PageContext } from '../contexts/PageContext'
import { NavLink } from 'react-router-dom'


const Header = () => {
  const {page} = useContext(PageContext)

  const renderTitle = (param) => {
    switch (param) {
      case "Event Details":
        return <NavLink to={"/events"} className='return'><h4>{page}</h4></NavLink>
      case "Booking Details":
        return <NavLink to={"/bookings"} className='return'><h4>{page}</h4></NavLink>
      case "Book Event":
        return <NavLink to={"/events"} className='return'><h4>{page}</h4></NavLink>
      default:
        return <h4>{page}</h4>
    }
  }
  
  return (
    <header>
      <div className='logo-container'>
        <img className='logo-icon' src={Logo} />
      </div>
      {renderTitle(page)}
      <button className='burger'>-</button>
    </header>
  )
}

export default Header