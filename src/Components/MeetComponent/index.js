import React from "react";
import "./index.css";
import phone3 from "../../assets/gif1.gif";
import Bounce from 'react-reveal/Bounce';

const MeetComponent = ({ title, icon, children }) => {
  return (
    <div className='meet-main-box'>
      <Bounce bottom>
      <div className='meet-image-box'>
        <img src={phone3} className='phone3 ' alt='phone3' />
      </div>
      </Bounce>
      <div className='meet-left-box'>
        {icon}
        <div className='title-box'>
          <h1>{title}</h1>
        </div>
        <div className='form-box'>{children}</div>
      </div>
    </div>
  );
};


export default MeetComponent;
