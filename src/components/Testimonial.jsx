import React from 'react'
import Wise from '../assets/LogoCloud/Wise.jpg'
import Testimonial1 from '../assets/Testimonial/Testimonial.jpg'

function Testimonial() {
  return (
    <>
    <div className='container' style={{marginTop:'80px'}}>
    <div className='testimonial'>
      <div  style={{textAlign:'center'}}>
        <img src={Wise} alt="Wise"/>
      </div>
      <p className='tPara m-5'>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>
      <div style={{textAlign:'center'}}>
        <img src={Testimonial1} />
        <h5 className='m-3'>Nick Babich</h5>
        <p>⭐ ⭐ ⭐ ⭐</p>
      </div>
    </div>  
    </div>
    </>
  )
}

export default Testimonial