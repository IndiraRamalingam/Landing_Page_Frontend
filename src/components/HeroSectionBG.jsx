import React from 'react'

function HeroSectionBG() {
  return (
    <>
  
            <div className="maintxt" style={{marginBottom:'100px'}}>
                <img src="https://img.freepik.com/premium-vector/graph-paper_127747-40.jpg?w=360" class="img-responsive" /> 
                <div className='overlay-text'>
                <h6 style={{fontSize:'20px',color:'purple',textAlign:'center'}}>Seamless experience</h6>
                <p className=' hPara1'>Unleashing the Next Generation of Card Solutions</p>
                <p className=' hPara2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <div style={{textAlign:'center'}}>
                <button className='btn btn-purple btn-lg'>Unlock your Card <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                </div> 
                <p className='hPara3 m-2'>*No credit card required</p>
                </div>
            </div>
        
    </>
  )
}

export default HeroSectionBG