import React from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComonent";

import "./index.css";
const ScreenThree = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenFour");
  };
  return (
    <>
      <MeetComponent
        title='Have you ever made payment with a virtual card?'
        icon={
          <IconComponent changeScreen={changeScreen} backPage={"screenTwo"} />
        }
      >
        <form className='form'>
          <label class='container'>
            Yes
            <input type='radio' checked='' name='radio' />
            <span class='checkmark'></span>
          </label>
          <br />
          <label class='container'>
            No
            <input type='radio' name='radio' /> <span class='checkmark'></span>
          </label>
          <div className='button-box'>
            <ButtonComponent text='Next' cb={handlePageSwitch} />
          </div>
        </form>
      </MeetComponent>
    </>
  );
};

export default ScreenThree;
