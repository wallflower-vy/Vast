import "./index.css";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import React from "react";
const simpleText = () => <>
What services would you like to see on <span>Vast</span>
</>

const ScreenThree = () => {
  return (
    <>
     
        <MeetComponent
          title={simpleText()}
         
        >
          <form>
                <input type="text" placeholder="Share your thoughts here"  className="input-field"/>
                
             </form>
        </MeetComponent>
        <div className='button-box'>
          <ButtonComponent text='Submit' />
        </div>
      
    </>
  );
};

export default ScreenThree;
