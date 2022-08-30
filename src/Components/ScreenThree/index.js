import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "./index.css";
import { FormContext } from "../../store";
import IconComponent from "../IconComonent";

const ScreenThree = ({ changeScreen }) => {
  const state = useContext(FormContext);

  const [used, setUsed] = useState(state.used);

  const handlePageSwitch = (e) => {
    e.preventDefault();
    state.setUsed(used);
    changeScreen("screenFour");
  };

  const handleChange = (event) => {
    if (event.target.value === "yes") {
      setUsed(true);
    } else {
      setUsed(false);
    }
  };

  return (
    <>
      <MeetComponent
        title='Have you ever made  payment with a virtual card?'
        icon={
          <IconComponent changeScreen={changeScreen} backPage={"screenTwo"} />
        }
      >
        <form className='form-radio-box'>
          <label class='container'>
            Yes
            <input
              type='radio'
              value='yes'
              checked={used}
              onChange={handleChange}
              className='input-tag'
            />
            <span class='checkmark'></span>
          </label>
          <br />
          <label class='container'>
            No
            <input
              type='radio'
              value='no'
              checked={!used}
              onChange={handleChange}
              className='input-tag'
            />{" "}
            <span class='checkmark'></span>
          </label>
        </form>
        <div className=' three-btn'>
          <ButtonComponent text='Next' cb={handlePageSwitch} />
        </div>
      </MeetComponent>
    </>
  );
};

export default ScreenThree;
