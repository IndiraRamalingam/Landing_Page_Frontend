import React from 'react'
import './App.css'
import Announcement from './components/Announcement'
import NavBar from './components/NavBar'
import HeroSectionBG from './components/HeroSectionBG'
import Footer from './components/Footer'
import LogoCloud from './components/LogoCloud'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
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
      <Footer />
    </div>
    </>
  )
}

export default App