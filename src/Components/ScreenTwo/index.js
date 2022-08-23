import React from "react";


import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

const ScreenTwo = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenThree");
  };
  return (
    <>
      
        <MeetComponent
          title='Can we meet you😊?'
          type='text'
          placeholder='Enter First Name here'
        />
        <div className='button-box'>
          <ButtonComponent text='Next' cb={handlePageSwitch} />
        </div>
      
    </>
  );
};

export default ScreenTwo;
