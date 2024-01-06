import React from 'react';
import Nuxt from '../assets/LogoCloud/Nuxt.jpg';
import AngelList from '../assets/LogoCloud/AngelList.jpg';
import Behance from '../assets/LogoCloud/Behance.jpg';
import Dribble from '../assets/LogoCloud/Dribble.jpg';
import Kinsta from '../assets/LogoCloud/Kinsta.jpg';
import LottieFiles from '../assets/LogoCloud/LottieFiles.jpg';
import Miro from '../assets/LogoCloud/Miro.jpg';
import Wise from '../assets/LogoCloud/Wise.jpg'


function LogoCloud() {
  return (
    <>
 <div className='container'>

<div className="brands">
  <div className="brands__item">
    <a href="#">
      <img src={Nuxt} alt="Nuxt" />
    </a>
  </div>
  <div className="brands__item">
  <a href="#">
  <img src={Miro} alt="Miro" />
    </a>
  </div>
  <div className="brands__item">
    <a href="#">
    <img src={LottieFiles} alt="LottieFiles" />
    </a>
  </div>
  <div className="brands__item">
  <a href="#">
  <img src={Wise} alt="Wise" />
    </a>
  </div>
  <div className="brands__item">
    <a href="#">
    <img src={Dribble} alt="Dribble" />
    </a>
  </div>
  <div className="brands__item">
  <a href="#">
  <img src={Kinsta} alt="Kinsta" />
    </a>
  </div>
  <div className="brands__item">
    <a href="#">
    <img src={AngelList} alt="AngelList" />
    </a>
  </div>
  <div className="brands__item">
  <a href="#">
  <img src={Behance} alt="Behance" />
    </a>
  </div>

</div>
    
    </div>
    </>
  )
}

export default LogoCloud