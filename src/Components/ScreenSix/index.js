import "./index.css";
import React, { useContext, useEffect, useState } from "react";

import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";

import IconComponent from "../IconComonent";
import { FormContext } from "../../store";
import axios from "axios";

const API_BASE_URL = `https://vast-app.herokuapp.com/api`;

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

  const handlePageSwitch = async (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      email,
      frustration,
      used,
      needs,
    };

    try {
      const res = await axios.post(
        `${API_BASE_URL}/register/waitlist`,
        payload
      );
      if (res.data) {
        changeScreen("screenSeven");
      }
      console.log(res.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    state.setNeed(needs);
  }, [state, needs]);

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
        <form onSubmit={handlePageSwitch}>
          {" "}
          <input
            type='text'
            name='needs'
            onChange={handleChange}
            required
            placeholder='Enter First Name here'
            className='input-field'
          />
          <div className='radio-btn-box six-btn'>
            <ButtonComponent text='Submit' />
          </div>
        </form>
      </MeetComponent>
    </>
  );
};

export default ScreenSix;
