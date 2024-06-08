import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import BandInfo from './BandInfo';
import Contact from './ContactPage';
import Footer from './Footer';
import { BrowserRouter , Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    <nav className='bg-black text-white d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <li><Link className='text-white text-decoration-none' to={"*"}>HOME</Link></li>
            <li><Link className='text-white text-decoration-none' to={"bandscreen"}>BAND</Link></li>
            <li><Link className='text-white text-decoration-none' to={"tourscreen"}>TOUR</Link></li>
            <li><Link className='text-white text-decoration-none' to={"contactscreen"}>CONTACT</Link></li>
            <div className="dropdown">
  <button className="dropbtn">MORE <FontAwesomeIcon icon={faCaretDown} /></button>
  <div className="dropdown-content text-dark">
    <Link className='text-dark text-decoration-none' to={"*"}>MERCHANDISE</Link>
    <Link className='text-dark text-decoration-none' to={"*"}>EXTRAS</Link>
    <Link className='text-dark text-decoration-none' to={"*"}>MEDIA</Link>
  </div>
</div>
        </div>
        <div id='search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </nav>
    <Carousel/>
    <BandInfo/>
    <Contact/>
    <Footer/>
    </div>
  )
}
