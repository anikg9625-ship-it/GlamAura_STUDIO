import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './Components/Layout'

import { Route,Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
 
  return (
    <>
    <Navbar></Navbar>
  
 <Routes>
  <Route path='/' element={<Layout/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
 </Routes>
 <Footer></Footer>
    </>
  )
}

export default App
