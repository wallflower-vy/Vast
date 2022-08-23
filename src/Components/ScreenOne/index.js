import "./index.css";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import phone from "../../assets/Phone1.png";
import phone2 from "../../assets/Phone2.png";

const ScreenOne = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenTwo");
  };
  return (
    <>
      <div className='banner-box'>
        <div className='banner-heading-wrapper'>
          <div className='box b1'>Create Virtual Cards for free</div>
          {/* <div className='box b2'>No Monthly Charge</div>
            <div className='box b3' >Friendly Exchange Rate</div> */}
        </div>
        <div className='text-box'>
          <p>
            We are building a virtual credit card that will make all your online
            card payments easier.{" "}
          </p>
        </div>
        <p className='text-box-text'>Be a part of our building progress</p>
        <ButtonComponent cb={handlePageSwitch} text='Join WaitList' />
      </div>

      <div className='image-box'>
        <img src={phone} className='phone' alt='phone' />
        {/* <img src={phone2} className="phone2"alt="phone2"/> */}
      </div>
      {/* <div >
   
    </div> */}
    </>
  );
};

export default ScreenOne;
