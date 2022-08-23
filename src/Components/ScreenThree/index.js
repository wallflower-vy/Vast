import "./index.css";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import React from "react";

const ScreenThree = () => {
  return (
    <>
     
        <MeetComponent
          title='What services would you like to see on <span>“Vast”<span>'
          type='text'
          placeholder='Share your thoughts here'
        />
        <div className='button-box'>
          <ButtonComponent text='Submit' />
        </div>
      
    </>
  );
};

export default ScreenThree;
