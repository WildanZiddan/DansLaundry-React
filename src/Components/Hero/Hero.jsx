import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/DarkArrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Cuci Bersih, Harga Irit, Jemput-Antar Gratis!</h1>
        <p>Laundry murah, bersih, dan wangi dengan layanan antar jemput cepat dan praktis. Solusi tepat untuk kamu yang sibuk dan ingin tetap tampil rapi.</p>
        <button className='btn'>Lihat selengkapnya <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
