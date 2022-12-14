import "./index.css";
import React, { useContext, useState } from "react";

import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import Shake from 'react-reveal/Shake';
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
  const [loading, setLoading] = useState(false);

  const { firstName, email, frustration, used, others } = state;

  const handlePageSwitch = async (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      email,
      frustration: [...frustration, others && others].filter(Boolean),
      used,
      needs,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        `${API_BASE_URL}/register/waitlist`,
        payload,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        changeScreen("screenSeven");
      }
      console.log(res.data);
    } catch (err) {
      setLoading(true);
      // Handle Error Here
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
            placeholder='Share your thoughts here'
            className='input-field'
          />
           <Shake>
          <div className=' six-btn'>
            <ButtonComponent loading={loading} text='Submit' />
          </div>
          </Shake>
        </form>
      </MeetComponent>
    </>
  );
};

export default ScreenSix;
