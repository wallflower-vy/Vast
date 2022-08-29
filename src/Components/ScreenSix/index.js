import "./index.css";
import React, { useContext, useEffect, useState } from "react";

import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import IconComponent from "../IconComonent";
import { FormContext } from "../../store";

const simpleText = () => (
  <>
    What services would you like to see on{" "}
    <span className='simple-text'>“Vast”</span>
  </>
);

const ScreenSix = ({ changeScreen }) => {
  const [needs, setNeeds] = useState("");
  const state = useContext(FormContext);

  const { firstName, email, frustration, used } = state;

  const handlePageSwitch = (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      email,
      frustration,
      used,
      needs,
    };
    console.log(payload);
    changeScreen("screenSeven");
  };

  useEffect(() => {
    state.setNeed(needs);
  }, [setNeeds]);

  const handleChange = (e) => {
    e.preventDefault();
    setNeeds(e.target.value);
    state.setNeed(needs);
  };

  return (
    <>
      <MeetComponent
        title={simpleText()}
        icon={
          <IconComponent changeScreen={changeScreen} backPage={"screenFour"} />
        }
      >
        <input
          type='text'
          name='needs'
          onChange={handleChange}
          placeholder='Enter First Name here'
          className='input-field'
        />
        <div className='button-box'>
          <ButtonComponent text='Submit' onClick={handlePageSwitch} />
        </div>
      </MeetComponent>
    </>
  );
};

export default ScreenSix;
