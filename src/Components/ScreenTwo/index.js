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
          
        >
          <form>
                <input type="text" placeholder="Enter First Name here" className="input-field" />
                <input type="email" placeholder= "Enter email address here" className="input-field" />
                
             </form>
             
        <div className='button-box'>
          
          <ButtonComponent text='Next' cb={handlePageSwitch} />
         
        </div>
        </MeetComponent>
        
      
    </>
  );
};

export default ScreenTwo;