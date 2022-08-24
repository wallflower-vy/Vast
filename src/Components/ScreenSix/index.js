import "./index.css";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import React from "react";

const ScreenSix = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("ScreenSeven");
  };
  return (
    <>
     
        <MeetComponent
          title='What services would you like to see on <span>“Vast”<span>'
          type='text'
          placeholder='Share your thoughts here'
        />
        <div className='button-box'>
          <ButtonComponent text='Submit' cb={handlePageSwitch} />
        </div>
      
    </>
  );
};

export default ScreenSix;
