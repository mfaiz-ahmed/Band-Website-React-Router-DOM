import React from 'react';
import Card1 from './Assets/Card-1.jpg';
import Card2 from './Assets/Card-2.jpg';
import Card3 from './Assets/Card-3.jpg';

export default function TourDates() {
  return (
    <div id='tour' className='text-center bg-black bandbox'>
      <h1 className='heading text-white'>TOUR DATES</h1>
      <h1 className='heading2'>Remember to book your tickets!</h1>
      <div className='datebox'>
        <div className='brdr'>
            <h3>September <span className='sold'>Sold out</span></h3>
        </div>
        <div className='brdr'>
            <h3>October <span className='sold'>Sold out</span></h3>
        </div>
        <div className='brdr'>
            <h3 className='d-flex justify-content-between align-items-center'>November <span className='number'>3</span></h3>
        </div>
      </div>
                    {/* CARD STARTED  */}
      <div className='cityCards flex-wrap'>
      <div className="card" style={{width: '25rem'}}>
  <img src={Card1} className="card-img-top" alt="Card 1"/>
  <div className="card-body">
    <h4 className="card-title text-start fw-bold">New York</h4>
    <h4 className="card-txt">Fri 27 Nov 2016</h4>
    <p className="card-txt2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    <div className='text-start'>
    <button className='button'>Buy Tickets</button>
    </div>
  </div>
</div>
      <div className="card" style={{width: '25rem'}}>
  <img src={Card2} className="card-img-top" alt="Card 1"/>
  <div className="card-body">
    <h4 className="card-title text-start fw-bold">Paris</h4>
    <h4 className="card-txt">Sat 28 Nov 2016</h4>
    <p className="card-txt2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    <div className='text-start'>
    <button className='button'>Buy Tickets</button>
    </div>
  </div>
</div>
      <div className="card" style={{width: '25rem'}}>
  <img src={Card3} className="card-img-top" alt="Card 1"/>
  <div className="card-body">
    <h4 className="card-title text-start fw-bold">San Francisco</h4>
    <h4 className="card-txt">Sun 29 Nov 2016</h4>
    <p className="card-txt2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    <div className='text-start'>
    <button className='button'>Buy Tickets</button>
    </div>
  </div>
</div>
      </div>
                    {/* CARD ENDED */}
    </div>
  )
}
