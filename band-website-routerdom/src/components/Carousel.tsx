import React from 'react'
import Carousel1 from './Assets/Carousel-1.jpg'
import Carousel2 from './Assets/Carousel-2.jpg'
import Carousel3 from './Assets/Carousel-3.jpg'

export default function Carousel() {
  return (
    <div  id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img style={{
        width:'100%',
        paddingTop:'5rem'
      }} src={Carousel1} className="d-block" alt="Carousel 1"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Los Angeles</h2>
        <br />
        <h3>We had the best time playing at Venice Beach!</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{
        width:'100%',
        paddingTop:'5rem'
      }} src={Carousel2}  alt="Carousel 2"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>New York</h2>
        <br />
        <h3>The atmosphere in New York is lorem ipsum.</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{
        width:'100%',
        paddingTop:'5rem'
      }} src={Carousel3}  alt="Carousel 3"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Chicago</h2>
        <br />
        <h3>Thank you, Chicago - A night we won't forget.</h3>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
