import React, { useContext, useEffect } from 'react'
import { PageContext } from '../contexts/PageContext'

const DashboardPage = () => {
  const {setPage} = useContext(PageContext)
  useEffect(() => {
    setPage("Dashboard")
  }, [])
  
  return (
    <></>
  )
}

export default DashboardPage