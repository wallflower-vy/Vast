import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/vast.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className='navigation-bar'>
      <div onClick={() => window.location.reload()} className='logo-box'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='icon-box'>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://www.facebook.com/usevastsapp'
            target='_blank'
          >
            <FaFacebookF />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://twitter.com/usevastapp?s=21&t=PMg2OfFx3RXIGIxyuOecVQ'
            target='_blank'
          >
            <BsTwitter />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://www.instagram.com/usevastapp/'
            target='_blank'
          >
            <AiFillInstagram />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/company/usevastapp/'
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
