import "./index.css";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import React from "react";
const simpleText = () => (
  <>
    What services would you like to see on{" "}
    <span className='simple-text'>“Vast”</span>
  </>
);

const ScreenSix = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenSeven");
  };
  return (
    <>
      <MeetComponent title={simpleText()}>
        <form>
          <input
            type='text'
            placeholder='Share your thoughts here'
            className='input-field2'
          />
        </form>
        <div className='button-box'>
          <ButtonComponent text='Submit' cb={handlePageSwitch} />
        </div>
      </MeetComponent>
    </>
  );
};

export default ScreenSix;
