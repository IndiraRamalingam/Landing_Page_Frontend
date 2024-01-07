import React from 'react'
import Frame from '../assets/Feature2/Frame.jpg'
import Group10 from '../assets/Feature2/Group10.jpg'
import Group12 from '../assets/Feature2/Group12.jpg'
import Rectangle from '../assets/Feature2/Rectangle.jpg'
import Scene from '../assets/Feature2/Scene.jpg'

function Feature2() {
  return (
    <>
    <div className='container' style={{marginTop:'80px'}}>
        <div className="featuretxt">
                <div className='overlay-feature'>
                <p className='fPara1'>Elevating Card Programs with Cutting-Edge Technology</p>
                <p className=' hPara2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p className='fPara3'>Compare all Pro features <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></p>
                </div>
        </div>
        <div className='row ' style={{marginTop:'50px'}}>
            <div className='col-xl-5 col-md-12 col-sm-12 m-5 fBox2'>
              <div className='fOne'>
                <img src={Scene} alt="scene"/ >
                <img className='group12' src={Group12} />  
                <img className='rectangle' src={Rectangle}/>
              </div>
            </div>
            
            <div className='col-xl-5 col-md-12 col-sm-12 m-5 fBox2'>
                <div className='fTwo'>
                  <div className='text_Box'>
                      <div className='row p-3'>
                            <div className='row'>
                              <div className="col-3" style={{textAlign:'center',fontFamily: 'Manrope',fontWeight: '600',fontSize:'19px'}} >Spending</div>
                              <div className='col-9' style={{textAlign:'end',fontFamily: 'Intern',fontWeight: '500',fontSize:'13px'}}>
                              <img src={Frame} />
                              </div>
                            </div>
                            <div className='row'>
                                <div className="col-6" style={{fontSize:'14px',color:'#5A6475'}} ><span><i class="fa fa-credit-card" aria-hidden="true"></i></span> 9349 Visa Card</div>
                            </div>
                      </div>

                      <div className='row p-2'>
                           <div className='row'>
                              <div className="col-3" style={{textAlign:'center',fontFamily: 'Manrope',fontWeight: '500',fontSize:'32px'}} >127.14</div>             
                              <div className="col-3"> <span style={{textAlign:'center',fontFamily: 'Intern',fontWeight: '400',fontSize:'14px'}}>USD</span></div>             
                            </div>
                     
                            <div className='row'>
                            <div className="col-4" style={{textAlign:'initial',fontFamily: 'Intern',fontWeight: '500',fontSize:'15px'}} >vs last week</div>
                              <div className='col-8' style={{textAlign:'center',fontFamily: 'Intern',fontWeight: '500',fontSize:'14px'}}>
                              Last Purchased ( Feb 24 19:59 UTC-5 )
                            </div>
                            </div>
                      </div>
                      <div className='row'>
                        <div className='row p-3' style={{textAlign:'center'}}>
                            <div className='col-sm-3'>
                                400 USD
                            </div>
                            <div className='col-sm-6'>
                                1000 USD
                            </div>
                            <div className='col-sm-3'>
                                5000 USD
                            </div>
                        </div>  

                        <div className='row m-3' style={{textAlign:'center'}}>
                            <div className='col-sm-3 img1'>
                                
                            </div>
                            <div className='col-sm-6'>
                                <img style={{marginTop:'-15px'}} src={Group10}/>
                            </div>
                            <div className='col-sm-3 img2'>
                            </div>
                        </div> 
                      </div>
                  </div>
                 
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Feature2