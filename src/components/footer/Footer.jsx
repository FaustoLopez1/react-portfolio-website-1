import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='#' className='footer_logo'>FaustoLopez</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/fausto.lopez.90/'><FaFacebookF/></a>
        <a href='https://twitter.com/Fausto_Lopez44'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Fausto Lopez. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer