import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Support_Us from './components/Support_Us';
import Membership from './components/Membership';
import Material from './components/Material';
import GetResources from './components/GetResources';
import Guidance from './components/Guidance';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/material" element={<Material/>}/>
          <Route path='/resources' element={<GetResources/>}/>
          <Route path="/guidance" element={<Guidance/>}/>
          <Route path="/member" element={<Membership/>}/>
          <Route path="/support" element={<Support_Us/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
