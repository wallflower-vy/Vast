import React from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "../ScreenThree/index.css";

const ScreenFour = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenSix");
  };
  return (
    <>
      <MeetComponent title="What has been your Major frustration with virtual Card Providers?">
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
        </form>
      </MeetComponent>
      <div className="button-box">
        <ButtonComponent text="Next" cb={handlePageSwitch} />
      </div>
    </>
  );
};

export default ScreenFour;
