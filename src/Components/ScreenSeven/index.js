import './index.css';
import ButtonComponent from "../ButtonComponent";
import phone from "../../assets/Phone1.png";
import React from 'react'

const ScreenSeven = () => {
  
  return (
    <>
      <div className='screenSeven-box'>
        
          <div className='screenseven-headingbox'>
              <h1>Thanks deborah🤗 for taking time to fill this survey!</h1>
          </div>
         <div className='screenseven-textbox'>
         <p>We will continue to build based on your recommendations. Kindly join our Telegram Community to be up-to-date on our product offerings cheers!🥂</p>
         </div>
         <ButtonComponent text="Join Community" />
     </div> 
    </>
  )
}

export default ScreenSeven