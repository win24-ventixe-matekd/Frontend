import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/EventsPage'
import PortalLayout from './assets/layouts/PortalLayout'
import CenterLayout from './assets/layouts/CenterLayout'
import Login from './assets/pages/LoginPage'
import SignUp from './assets/pages/SignUpPage'
import Bookings from './assets/pages/BookingsPage'
import EventDetail from './assets/pages/EventDetailPage'
import BookEvent from './assets/pages/BookEventPage'
import BookingDetail from './assets/pages/BookingDetailPage'
import DashboardPage from './assets/pages/DashboardPage'

function App() {

  return (
    <Routes>
      {/* <Route element={<CenterLayout />}>
        <Route index element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Route> */}
      <Route element={<PortalLayout />}>
        <Route index element={<DashboardPage />}/>
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id'element={<EventDetail />} />
        <Route path='/events/booking/:id'element={<BookEvent />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/bookings/:id' element={<BookingDetail />} />
      </Route>
    </Routes>
  )
}

export default App
