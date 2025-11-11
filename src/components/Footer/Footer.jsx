import React from 'react'
import './Footer.css'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-left">
        <ul>
          <p>Habari Category</p>
          <li>Habari Zote</li>
          <li>Habari</li>
          <li>Siasa</li>
          <li>Michezo</li>
          <li>Burudani</li>
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
        <p>Wasiala Nasi</p>
        <p><MdEmail />EMAIL</p>
        <p><FaPhone />CONTACT</p>
      </div>
    </div>
  )
}

export default Footer
