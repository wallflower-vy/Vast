import React from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "../ScreenThree/index.css";
import "./index.css"
import IconComponent from "../IconComonent";

const ScreenFour = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenSix");
  };
  return (
    <>
      <MeetComponent 
      title="What has been your Major frustration with virtual Card Providers?"
      icon={
        <IconComponent changeScreen={changeScreen} backPage={"screenThree"} />
      }
      >
        <p className="para">(You can check multiple boxes)</p>
        <form className="form">
          <label class="container">
          <input type="checkbox"  />
            Exchange Rates
            <span class="checkmark"></span>
          </label>
          <label class="container">
          <input type="checkbox" />
            Transaction Limits
            <span class="checkmark"></span>
          </label>
          <label class="container">
          <input type="checkbox" />
            Long Onboarding Process
            <span class="checkmark"></span>
          </label>
          <label class="container">
          <input type="checkbox" />
            Other
            <span class="checkmark"></span>
          </label>
          <div className="button-box screenfour-btn">
        <ButtonComponent text="Next" className="" cb={handlePageSwitch} />
      </div>
        </form>
      </MeetComponent>
     
    </>
  );
};

export default ScreenFour;
