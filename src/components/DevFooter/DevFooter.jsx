import React from 'react'
import './DevFooter.css'
import { Link } from 'react-router-dom'

const DevFooter = () => {
  const date = new Date()
  const dateYear = date.getFullYear()
  return (
    <div className='dev-footer'>
      <div className="dev-footer-header">
        <Link to={'/privacyPolicy'} className='dev-footer-links'><p>PRIVACY POLICY</p></Link>
        <Link className='dev-footer-links'><p>TERMS AND CONDITION</p></Link>
        <Link to={'/login'} className='dev-footer-links'><p>STAFF</p></Link>
      </div>
      <hr />
      <div className="dev-footer-content">
        <p>Copyright &copy; {dateYear} FMG. All rights reserved.</p>
        <div className='dev-inner-footer'>
          <p>Designed and Developed by</p>
          <a>AURALINX</a>
        </div>
      </div>
    </div>
  )
}

export default DevFooter
