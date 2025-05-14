import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'

function App() {

  return (
    <Routes>
      <Route path='/events' element={<Events />} />
    </Routes>
  )
}

export default App
