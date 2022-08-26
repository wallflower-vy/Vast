import React from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComonent";

const ScreenTwo = ({ changeScreen,handleSwitchBack }) => {
  const handlePageSwitch = () => {
    changeScreen("screenThree");
  };
  
  
  return (
    <>
        {/* <div className="arrowicon-box">
        <IconComponent /></div>  */}
        <MeetComponent
        
          title='Can we meet you😊?'
          icon={<IconComponent changeScreen={changeScreen} backPage={"screenOne"}/>
          
            
         }
         
        >
          <form>
                <input type="text" placeholder="Enter First Name here" className="input-field" required />
                <input type="email" placeholder= "Enter email address here" className="input-field" required/>
                <div className='button-box'>
          
               <ButtonComponent text='Next' cb={handlePageSwitch} />
         
        </div>
                
             </form>
             
        
       
        </MeetComponent>
        
      
    </>
  );
};

export default ScreenTwo;