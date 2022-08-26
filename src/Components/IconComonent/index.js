import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./index.css";
import { useState } from "react";
import ScreenTwo from "../ScreenTwo";
import ScreenOne from "../ScreenOne";
import ScreenThree from "../ScreenThree";
import ScreenFour from "../ScreenFour";
import ScreenSix from "../ScreenSix";
import ScreenSeven from "../ScreenSeven";

const switchback = () => {
  // const [screen, setScreen]=useState("screenOne");
  // switch (screen) {
  //     case "screenOne":
  //       return <ScreenOne  changeScreen={setScreen} />;
  //       break;
  //     case "screenTwo":
  //       return <ScreenTwo changeScreen={setScreen} />;
  //       break;
  //       case "screenSeven":
  //       return <ScreenSeven changeScreen={setScreen} />;
  //       break;
  //       case "screenThree":
  //       return <ScreenThree changeScreen={setScreen} />;
  //       break;
  //       case "screenFour":
  //       return <ScreenFour changeScreen={setScreen} />;
  //       break;
  //       case "screenSix":
  //       return <ScreenSix changeScreen={setScreen} />;
  //       break;
  //     default:
  //       throw new Error('This screen doesnt exist')
  //   }
};

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
