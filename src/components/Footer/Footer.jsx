import React from 'react'
import './Footer.css'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-left">
        <ul>
          <p>Habari Category</p>
          <Link to={'/habariZote'} className='footer-navs'><li>Habari Zote</li></Link>
          <Link to={'/habari'} className='footer-navs'><li>Habari</li></Link>
          <Link to={'/siasa'} className='footer-navs'><li>Siasa</li></Link>
          <Link to={'/michezo'} className='footer-navs'><li>Michezo</li></Link>
          <Link to={'/burudani'} className='footer-navs'><li>Burudani</li></Link>    
        </ul>
      </div>
      <div className="footer-between">
        <p>Tufuatile Kupitia</p>
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
      <div className="footer-right">
        <p>Wasiliana Nasi</p>
        <p className='mawasiliano'><MdEmail />famaraentertainmenttz@gmail.com</p>
        <p className='mawasiliano'><FaPhone />+255 714 921 589</p>
      </div>
    </div>
  )
}

export default Footer
