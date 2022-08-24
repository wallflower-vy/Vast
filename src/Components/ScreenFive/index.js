import React from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

const ScreenFive = ({ changeScreen }) => {
  const handlePageSwitch = () => {
    changeScreen("screenSix");
  };
  return (
    <>
      <MeetComponent 
      title ='What has been your Major frustration with virtual Card Providers?'
      >
        <p>(You can check multiple boxes)</p>
        <form>
          <input type="checkbox" name="box1" />
          <label for="box1"> Exchange Rates</label>
          <input type="checkbox" name="box2" />
          <label for="box2"> Transaction Limits</label>
          <input type="checkbox" name="box1" />
          <label for="box1"> Long Onboarding Process</label>
          <input type="checkbox" name="box2" />
          <label for="box2"> Other</label>
        </form>
      </MeetComponent>
      <div className="button-box">
        <ButtonComponent text="Next" cb={handlePageSwitch} />
      </div>
    </>
  );
};

export default ScreenFive;
