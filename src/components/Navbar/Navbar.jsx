import React from 'react'
import './Navbar.css'
import { IoCalendar } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import famara_logo from '../../assets/famara_logo.png'
import { FaAlignLeft } from "react-icons/fa6";


const Navbar = () => {
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
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
          ><GrInstagram /></a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
          ><FaFacebookF /></a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
          ><BsTwitterX /></a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
          ><FaYoutube /></a>
        </div>
      </header>

      <div className="nav-content">
        <div className="nav-img">
        <div className="nav-line">
          <FaAlignLeft />
        </div>
        <img src={famara_logo} alt="famara media logo" />

        </div>
        <ul className='nav-links'>
          <li>NYUMBANI</li>
          <li>HABARI ZOTE</li>
          <li>HABARI</li>
          <li>SIASA</li>
          <li>MICHEZO</li>
          <li>BURUDANI</li>
          <li>ZAIDI</li>
        </ul>
          
      </div>
    </div>
  )
}

export default Navbar
