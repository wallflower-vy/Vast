import React from 'react';
import './index.css';

import logo from '../../../assets/vast.png';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn } from 'react-icons/fa';
import {AiFillInstagram } from 'react-icons/ai';

const Navigation = () => {
  return (
    <div className='navigation-bar'>
    <div className='logo-box'>
            <img src={logo} alt='logo'/>
    </div>
    <div className='icon-box'>
        <div className='icons'><FaFacebookF /></div>
        <div className='icons'><BsTwitter /></div>
        <div className='icons'><AiFillInstagram /></div>
        <div className='icons'><FaLinkedinIn /></div>

    </div>

  </div>
  )
}

export default Navigation