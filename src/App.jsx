import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar />
      <ProjectsSection />
      <About />
      <Contact />
    </>
  )
}

export default App
