import "./index.css";
// import ButtonComponent from "../ButtonComponent";
import phone from "../../assets/Phone1.png";
import React, { useContext } from "react";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import { FormContext } from "../../store";
// import GifComponent from '../GifComponent';

const ScreenSeven = () => {
  const { firstName } = useContext(FormContext);

  return (
    <>
      <div className='screenSeven-box'>
        <div className='screenseven-headingbox'>
          <h1>Thanks {firstName}🤗for taking time to fill this survey!</h1>
        </div>
        <div className='screenseven-textbox'>
          <div class='new-box'>
            <p>
              We will continue to build based on your recommendations. Kindly
              join our Telegram Community to be up-to-date on our product
              offerings cheers!🥂
            </p>
          </div>
        </div>
        <a
          href='https://71il7r7zt8x.typeform.com/to/iGzhO0k8 '
          target='_blank'
          className='button'
        >
          Join Community
        </a>

        <div className='gif-box'>
          <img src={gif1} alt='' className='gif-three ' />
          <img src={gif2} className='gif-four ' />
        </div>
      </div>
    </>
  );
};

export default ScreenSeven;
