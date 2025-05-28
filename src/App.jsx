import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Login from './assets/pages/Login'
import SignUp from './assets/pages/SignUp'
import Bookings from './assets/pages/Bookings'
import EventDetail from './assets/pages/EventDetail'

function App() {

  return (
    <Routes>
      <Route element={<CenterLayout />}>
        <Route index element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
      <Route element={<PortalLayout />}>
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id'element={<EventDetail />} />
        <Route path='/bookings' element={<Bookings />} />
      </Route>
    </Routes>
  )
}

export default App
