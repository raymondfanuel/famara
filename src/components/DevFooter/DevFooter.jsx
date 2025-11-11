import React from 'react'
import './DevFooter.css'
import { Link } from 'react-router-dom'
import auralinx_logox from '../../assets/auralinx_logox.png'

const DevFooter = () => {
  return (
    <div className='dev-footer'>
      <div className="dev-footer-header">
        <Link to={'/privacyPolicy'} className='dev-footer-links'><p>PRIVACY POLICY</p></Link>
        <Link className='dev-footer-links'><p>TERMS AND CONDITION</p></Link>
        <Link className='dev-footer-links'><p>STAFF</p></Link>
      </div>

      <div className="dev-footer-content">
        <img src={auralinx_logox} alt="auralinx logo" width={'60px'}/>
        <div className='dev-inner-footer'>
          <p>Designed and Developed by</p>
          <a>AURALINX</a>
        </div>
      </div>
    </div>
  )
}

export default DevFooter
