import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/vast.png";
import {ReactComponent as Instagram} from '../../../assets/instagram.svg'
import {ReactComponent as Twitter} from '../../../assets/twitter.svg'
import {ReactComponent as LinkedIn} from '../../../assets/linkedin.svg'
import {ReactComponent as Facebook} from '../../../assets/facebook.svg'
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
            <Facebook />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://twitter.com/usevastapp?s=21&t=PMg2OfFx3RXIGIxyuOecVQ'
            target='_blank'
          >
            <Twitter />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://www.instagram.com/usevastapp/'
            target='_blank'
          >
            <Instagram />
          </a>
        </div>
        <div className='icons'>
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/company/usevastapp/'
            target='_blank'
          >
            <LinkedIn/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
