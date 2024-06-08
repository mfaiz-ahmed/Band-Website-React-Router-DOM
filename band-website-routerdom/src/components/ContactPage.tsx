import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function contact() {
  return (
    <div id='contact' className='text-center box'>
      <h1 className='heading'>CONTACT</h1>
      <h2 className='heading2'>We love music!</h2>
      <div className='contactBox'>
        <div >
            <p><FontAwesomeIcon icon={faLocationDot} /> Chicago, US</p>
            <p><FontAwesomeIcon icon={faPhone} /> Phone: +00 151515</p>
            <p><FontAwesomeIcon icon={faEnvelope} />  Email: mail@mail.com</p>
        </div>
        <div>
            <div>
            <input className='input' type="text" placeholder='Name' />
            <input className='input' type="email" placeholder='Email' />
            </div>
            <textarea className='input'   placeholder='Message'></textarea>
      <div className='text-end container'>
            <button className='button'>SEND</button>
      </div>
        </div>
      </div>

    </div>
  )
}
