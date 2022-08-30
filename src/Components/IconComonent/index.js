import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./index.css";

const IconComponent = ({ switchback, changeScreen, backPage }) => {
  const handlePageSwitch = () => {
    changeScreen(backPage);
  };

  return (
    <div onClick={() => handlePageSwitch()}>
      <BsArrowLeft
        // onClick={switchback}
        className='arrow-icon'
      />
    </div>
  );
};

export default IconComponent;
