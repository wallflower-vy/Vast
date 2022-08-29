import "./index.css";
import React, { useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
// import phone from "../../assets/Phone1.png";
// import GifComponent from "../GifComponent";
import { sliderAnimation } from "../../utils/animations";

const ScreenOne = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenTwo");
  };

  useEffect(() => {
    sliderAnimation();
  }, []);
  return (
    <>
      <div className='banner-box'>
        <div className='banner-heading-wrapper'>
          <div className='box b1'>
            <span className='s1'>
              Create Virtual Cards <span className='blurbg'>for free</span>
            </span>
            <span className='s2'>No Monthly Charge</span>
            <span className='s3'>Friendly Exchange Rate</span>
          </div>
        </div>
        <div className='text-box'>
          <p>
            We are building a virtual credit card that will make all your online
            card payments easier.{" "}
          </p>
        </div>
        <p className='text-box-text'>Be a part of our building progress</p>

        <ButtonComponent onClick={handlePageSwitch} text='Join WaitList' />
        {/* <div className='gif-box'> */}
        <img src={gif1} alt='' className='gif-one' />
        <img src={gif2} className='gif-two' />

        {/* </div> */}
      </div>

      {/* <div >
   
    </div> */}
    </>
  );
};

export default ScreenOne;
