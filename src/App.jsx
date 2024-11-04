import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import LocomotiveScroll from 'locomotive-scroll'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='font-["Roboto"] w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App