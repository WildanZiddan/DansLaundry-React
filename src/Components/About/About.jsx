import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon'/> */}
      </div>
      <div className="about-right">
        <h3>TENTANG KAMI</h3>
        <h2>Merawat Pakaian Anda dengan Sepenuh Hati</h2>
        <p>Kami percaya bahwa setiap pakaian memiliki nilai dan cerita tersendiri. Oleh karena itu, kami selalu memberikan perhatian ekstra dalam setiap proses pencucian agar pakaian tetap terawat dan tahan lama. Dengan layanan profesional dan tim yang berpengalaman, kami hadir sebagai solusi terbaik untuk kebutuhan laundry Anda.</p>
        <p>Didukung oleh mesin modern dan deterjen berkualitas yang ramah lingkungan, kami mampu mencuci berbagai jenis bahan pakaian tanpa merusak serat atau warna aslinya. Hasil cucian akan terasa lebih bersih, segar, dan siap dipakai kapan saja. Kepuasan pelanggan selalu menjadi prioritas utama dalam pelayanan kami.</p>
        <p>Bagi Anda yang sibuk dan tidak sempat datang langsung, kami menyediakan layanan antar jemput gratis dan cepat untuk area tertentu. Proses mudah, tinggal hubungi kami, dan pakaian Anda akan kami jemput serta antar kembali dalam kondisi bersih dan wangi. DANS LAUNDRY, solusi cuci hemat dan nyaman untuk Anda!</p>
      </div>
    </div>
  )
}
export default About
