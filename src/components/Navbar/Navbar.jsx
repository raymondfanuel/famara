import React, { useState } from 'react'
import './Navbar.css'
import { IoCalendar } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import famara_logo from '../../assets/famara_logo.png'
import { FaAlignLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const today = new Date();
  const dateString = today.toDateString();
  return (
    <div className='navbar'>
      <header className='nav-header'>
        <div className="nav-header-left">
          <p><IoCalendar /> {dateString}</p>
        </div>
        <div className="nav-header-right">
          <a 
            href="https://www.instagram.com/famaramedia?igsh=ZzJ0ZDRicnJjeW05" 
            target="_blank" 
            rel="noopener noreferrer"
          ><GrInstagram /></a>
          <a 
            href="https://www.facebook.com/profile.php?id=100083006358894"
            target="_blank" 
            rel="noopener noreferrer"
          ><FaFacebookF /></a>
          <a 
            href="https://x.com/FamaraMedia?s=09" 
            target="_blank" 
            rel="noopener noreferrer"
          ><BsTwitterX /></a>
          <a 
            href="https://youtube.com/@famaramedia?si=RnLiZQpQLs-AC3Gh" 
            target="_blank" 
            rel="noopener noreferrer"
          ><FaYoutube /></a>
        </div>
      </header>

      <div className="nav-content">
        <div className="nav-img">
        <div className="nav-line" onClick={()=>{setMenuOpen(!menuOpen)}}>
          {menuOpen? <IoMdClose /> : <FaAlignLeft /> }
        </div>
        <img src={famara_logo} alt="famara media logo" />
        </div>
        <ul className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
          <NavLink to={'/'} className={'navlinks'}><li>NYUMBANI</li></NavLink>
          <NavLink to={'/habariZote'} className={'navlinks'}><li>HABARI ZOTE</li></NavLink>
          <NavLink to={'/habari'} className={'navlinks'}><li>HABARI</li></NavLink>
          <NavLink to={'/siasa'} className={'navlinks'}><li>SIASA</li></NavLink>
          <NavLink to={'/michezo'} className={'navlinks'}><li>MICHEZO</li></NavLink>
          <NavLink to={'/burudani'} className={'navlinks'}><li>BURUDANI</li></NavLink>
          <NavLink to={'/zaidi'} className={'navlinks'}><li>ZAIDI</li></NavLink>
        </ul>
          
      </div>
    </div>
  )
}

export default Navbar
