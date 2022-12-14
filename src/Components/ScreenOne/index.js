import './index.css';
import React, { useEffect } from 'react';
import ButtonComponent from '../ButtonComponent';
import gif1 from '../../assets/gif1.gif';
import gif2 from '../../assets/gif2.gif';
// import phone from "../../assets/Phone1.png";
// import GifComponent from "../GifComponent";
import { sliderAnimation } from '../../utils/animations';
import HeadShake from 'react-reveal/HeadShake';
import Jump from 'react-reveal/Jump';


const ScreenOne = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen('screenTwo');
  };

  useEffect(() => {
    sliderAnimation();
  }, []);
  return (
    <>
      <div className="banner-box">
        <div className="banner-heading-wrapper">
          <div className="box b1">
            <span className="s1">
              Create Virtual Cards{' '}
              <span className="blur-container">
                <span>for free</span> <span className="blurbg"></span>{' '}
              </span>
            </span>
            <span className="s2">
              Perform multiple{' '}
              <span className="blur-container">
                <span> transactions at zero </span>{' '}
                <span className="blurbg"></span>
              </span>{' '}
              monthly fees.
            </span>

            <span className="s3">
              Friendly{' '}
              <span className="blur-container">
                <span> Exchange Rate</span> <span className="blurbg"></span>{' '}
              </span>
            </span>
          </div>
        </div>
        <div className="move-down">
          <div className="text-box">
            <p>
              We are building Vast to take all of your online and international
              card transactions to an upgrade..{' '}
            </p>
          </div>
          <p className="text-box-text">
            You would love to be a part of that experience, right?
          </p>
        </div>
        <HeadShake>
        <ButtonComponent
          className="screen-one-btn"
          onClick={handlePageSwitch}
          text="Join WaitList"
        />
        </HeadShake>
      </div>
      <Jump>
      <div className="gif-one-box">
        <img src={gif1} alt="gif-one" className="gif-one" />
      </div>
      </Jump>
      
      <Jump>
      <div className="gif-two-box">
        <img alt="gif-one" src={gif2} className="gif-two" />
      </div>
      </Jump>
      
    </>
  );
};

export default ScreenOne;
