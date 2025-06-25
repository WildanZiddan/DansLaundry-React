import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/DansLaundryText.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky (false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Beranda</Link></li>
        <li><Link to='program' smooth={true} offset={-220} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-140} duration={500}>Tentang Kami</Link></li>
        <li><Link to='contact' smooth={true} offset={-250} duration={500}><button className='btn'>Kontak Kami</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" onClick={toggleMenu} className='menu-icon'/>
    </nav>
  )
}

export default Navbar
