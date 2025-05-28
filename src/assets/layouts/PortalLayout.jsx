import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import PageProvider from '../contexts/PageContext'

const PortalLayout = () => {
  return (
    <PageProvider>
      <div className='portal-wrapper'>
        <Header />
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </PageProvider>
  )
}

export default PortalLayout