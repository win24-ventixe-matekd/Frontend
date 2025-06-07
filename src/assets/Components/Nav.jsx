import React from 'react'
import Logo from '../images/ventixe-logo.svg'
import Ticket from '../images/Ticket.svg'
import Check from '../images/CheckSquare.svg'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className='logo-container'>
        <NavLink className="logo-link" to={"/"}>
          <img className='logo-icon' src={Logo} />
          <h4>Ventixe</h4>
        </NavLink>
      </div>
      <NavLink className='nav-link' to={"/events"}>
        <div className="nav-icon">
          <img src={Ticket} />
        </div>
        <span className='nav-text'>Events</span>
      </NavLink>
      <NavLink className='nav-link' to={"/bookings"}>
        <div className="nav-icon">
          <img src={Check} />
        </div>
        <span className='nav-text'>Bookings</span>
      </NavLink>
    </nav>
  )
}

export default Nav