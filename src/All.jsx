import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import MyNav from './components/MyNav'
import Services from './components/Services'
import ServicesDetails from './components/ServiceDetails'



function All() {
  return (
    <div className='App'>
    <BrowserRouter>
    <MyNav />
    <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/contact/:id" element={<ServicesDetails />}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default All