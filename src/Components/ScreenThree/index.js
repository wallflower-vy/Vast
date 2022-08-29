import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "./index.css";
import { FormContext } from "../../store";
const ScreenThree = ({ changeScreen }) => {
  const [used, setUsed] = useState(false);

  const state = useContext(FormContext);

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
      <MeetComponent title='Have you ever made payment with a virtual card?'>
        <form className='form'>
          <label class='container'>
            Yes
            <input
              type='radio'
              value='yes'
              checked={used}
              onChange={handleChange}
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
            />{" "}
            <span class='checkmark'></span>
          </label>
        </form>
      </MeetComponent>
      <div className='button-box'>
        <ButtonComponent text='Next' cb={handlePageSwitch} />
      </div>
    </>
  );
};

export default ScreenThree;
