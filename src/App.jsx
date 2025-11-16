import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Featured from './Components/Featured'
import Whyus from './Components/Whyus'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Product from './pages/Product'
import About from './pages/About'
import Privacy from './pages/Privacy'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Header />
          <Featured />
          <Whyus />
          <Testimonial />
          <Contact />
        </>} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About/>} />
        <Route path='/privacy' element={<Privacy/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App