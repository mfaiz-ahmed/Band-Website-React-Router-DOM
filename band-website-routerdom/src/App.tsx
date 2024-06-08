import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import BandInfo from './components/BandInfo';
import TourDates from './components/TourDates';
import Contact from './components/ContactPage';
import Footer from './components/Footer';
import AppRoutes from './Config/AppRoutes';



function App() {
  return (
    <>
    <AppRoutes/>
    </>
  );
}

export default App;
