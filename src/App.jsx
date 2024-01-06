import React from 'react'
import './App.css'
import Announcement from './components/Announcement'
import NavBar from './components/NavBar'
import HeroSectionBG from './components/HeroSectionBG'
import LogoCloud from './components/LogoCloud'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Component from './components/Component'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div>
      <Announcement />
      <NavBar />
      <HeroSectionBG />
      <LogoCloud />
      <Feature1 />
      <Feature2 />
      <Component />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
    </>
  )
}

export default App