import React from 'react';
import Key from '../assets/Feature1/key.jpg';
import Lock from '../assets/Feature1/lock.jpg';
import Globe from '../assets/Feature1/globe.jpg'

function Feature1() {
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
        <div className='row' style={{marginTop:'50px'}}>
            <div className='col-xl-4 col-md-12 col-sm-12 fBox'>
                <img src={Globe} alt="globe"/ >
                <p className='fTitle'>Globally Accepted</p>
                <p className='fSentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
            <div className='col-xl-4 col-md-12 col-sm-12 fBox'>
            <img src={Key} alt="key"/ >
                <p className='fTitle'>Biometric Integrated</p>
                <p className='fSentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
            <div className='col-xl-4 col-md-12 col-sm-12 fBox'>
            <img src={Lock} alt="lock"/ >
                <p className='fTitle'>Fully Secured</p>
                <p className='fSentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>

        </div>

    </div>
  
    </>
  )
}

export default Feature1