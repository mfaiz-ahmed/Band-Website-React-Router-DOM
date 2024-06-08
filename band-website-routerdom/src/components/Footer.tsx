import React from 'react'
import FooterImage from './Assets/Footer-Image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faPinterest, faSnapchat, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <div>
      <div id='map'>
      <img style={{
        width:'100vw'
      }} src={FooterImage} alt="Map" />
      </div>
      <div className='iconsBox'>
      <h1 className='icons'><FontAwesomeIcon icon={faSquareFacebook} /></h1>
      <h1 className='icons'><FontAwesomeIcon icon={faInstagram} /></h1>
      <h1 className='icons'><FontAwesomeIcon icon={faSnapchat} /></h1>
      <h1 className='icons'><FontAwesomeIcon icon={faPinterest} /></h1>
      <h1 className='icons'><FontAwesomeIcon icon={faTwitter} /></h1>
      <h1 className='icons'><FontAwesomeIcon icon={faLinkedin} /></h1>
      </div>
    </div>
  )
}
