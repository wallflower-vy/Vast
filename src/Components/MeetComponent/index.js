import React, { Children, useState } from "react";
import "./index.css";
import phone3 from '../../assets/gif1.gif';

// const [screen, setScreen]=useState("ScreenOne");

const MeetComponent = ({ title, icon, children }) => {
  return (
    <div className='meet-main-box'>
      <div className='meet-image-box'>
        <img src={phone3} className='phone3' alt='phone3' />
      </div>
      <div className='meet-left-box'>
        {icon}
        <h1>{title}</h1>
        <div className='form-box'>{children}</div>
      </div>
    </div>
  );
};

export default MeetComponent;
