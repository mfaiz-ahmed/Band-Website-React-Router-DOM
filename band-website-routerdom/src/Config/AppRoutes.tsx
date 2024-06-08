import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import BandInfo from '../components/BandInfo'
import TourDates from '../components/TourDates'
import Navbar from '../components/Navbar'
import Contact from '../components/ContactPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<Navbar/>}/>
        <Route path='bandscreen' element={<BandInfo/>}/>
        <Route path='tourscreen' element={<TourDates/>}/>
        <Route path='contactscreen' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}
