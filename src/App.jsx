import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='PROGRAM KAMI' title='Yang Kami Tawarkan'/>
        <Programs/>
        <About/>
        <Title subTitle='HUBUNGI KAMI' title='Siap Membantu Kebutuhan Laundry Anda'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
