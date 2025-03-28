import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import Carousel from './components/carousel.jsx'; 
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ClientLoginPage from './pages/ClientLoginPage.jsx';
import EmployeeLoginPage from './pages/EmployeeLoginPage.jsx';


function App() {
  return (
    <div>

    <Navbar/>
    
         <Routes>
         {/* <Route index element={<HomePage />} /> Default route */}
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/services' element={<ServicePage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/client-login' element={<ClientLoginPage/>} />
          <Route path='/employee-login' element={<EmployeeLoginPage/>} />
         </Routes>
    </div>
  )
}

export default App;


