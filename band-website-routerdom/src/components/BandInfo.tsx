import React from 'react'
import BandMember from './Assets/Band-Member.jpg'
import Navbar from './Navbar'

export default function BandInfo() {
  return (
    <>
    <Navbar/>
    <div id='band' className='text-center box'>
      <h1 className='heading'>THE BAND</h1>
      <h2 className='heading2'>We love music!</h2>
      <p className='text'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='d-flex justify-content-center bandbox flex-wrap'>
            <div>
                <h3>Name</h3>
                <img className='bandimg' src={BandMember} alt="Band Member" />
            </div>
            <div>
                <h3>Name</h3>
                <img className='bandimg' src={BandMember} alt="Band Member" />
            </div>
            <div>
                <h3>Name</h3>
                <img className='bandimg' src={BandMember} alt="Band Member" />
            </div>
        </div>
    </div>
    </>
  )
}
