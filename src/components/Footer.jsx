import React from 'react'

function Footer() {
  return (
    <>
     <div className='container' style={{marginTop:'80px'}}>
     <div className="featuretxt">
                <div className='overlay-feature'>
                <p className='footerTitle'>Mode UI</p>
                <p className=' footerText'>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
                </div>
        </div>
        <hr/>

        <div className='row'>
            <div className='col-xl-2 col-md-4 col-sm-12 footerBox m-3'>
                <p className='mb-3' style={{fontWeight:'700',fontSize:'17px'}}>Company</p>
                <span>About Us</span>
                <span>Pricing</span>
                <span>Contact Us</span>
                <span>Features</span>
            </div>
            <div className='col-xl-2 col-md-4 col-sm-12 footerBox m-3'>
            <p className='mb-3' style={{fontWeight:'700',fontSize:'17px'}}>Product</p>
                <span>Figma Design System</span>
                <span>los kit</span>
                <span>Android kit</span>
                <span>Wireframe</span>
            </div>
            <div className='col-xl-2 col-md-4 col-sm-12 footerBox m-3'>
            <p className='mb-3' style={{fontWeight:'700',fontSize:'17px'}}>Resources</p>
                <span>Templates</span>
                <span>Landing pages</span>
                <span>Documentation</span>
                <span>Comp library</span>
            </div>
            <div className='col-xl-2 col-md-4 col-sm-12 footerBox m-3'>
            <p className='mb-3' style={{fontWeight:'700',fontSize:'17px'}}>Legal</p>
                <span>Privacy policy</span>
                <span>Terms & Conditions</span>
                <span>Disclaimer</span>
                <span>Affiliate programme</span>
            </div>
            <div className='col-xl-2 col-md-4 col-sm-12 footerBox m-3'>
            <p className='mb-3' style={{fontWeight:'700',fontSize:'17px'}}>Support</p>
                <span>Help centre</span>
                <span>Raise ticket</span>
                <span>Report</span>
                <span>Refund</span>
            </div>
            
        </div>

        <div className='m-5' style={{textAlign:'center'}}>
        <span className='m-2'><i className="fa-brands fa-github"></i></span>
        <span className='m-2'><i className="fa-brands fa-linkedin"></i></span>
        <span className='m-2'><i className="fa-brands fa-github-alt"></i></span>

        </div>
        <div className='m-5' style={{textAlign:'center'}}>
            <p>© 2023 Mode UI  Inc. All Rights Reserved.</p>
        </div>

     </div>
    </>
  )
}

export default Footer