import "./index.css";
// import ButtonComponent from "../ButtonComponent";
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
              join our WhatsApp Community to be up-to-date on our product
              offerings cheers!🥂
            </p>
          </div>
        </div>
        <a
          href='https://chat.whatsapp.com/BfaVhLXlZ39CfUKzGEaOHN'
          target='_blank'
          className='button'
          rel='noreferrer'
        >
          Join Community
        </a>
      </div>
      <div className='gif-three-box'>
        <img src={gif1} alt='gif-three' className='gif-three' />
      </div>
      <div className='gif-four-box'>
        <img alt='gif-four' src={gif2} className='gif-four' />
      </div>
    </>
  );
};

export default ScreenSeven;
