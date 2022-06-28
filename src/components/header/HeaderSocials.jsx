import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/fausto-lopez-83b867227/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/FaustoLopez1" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials