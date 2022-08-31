import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "../ScreenThree/index.css";
import "./index.css";
import IconComponent from "../IconComonent";
import { FormContext } from "../../store";

const ScreenFour = ({ changeScreen }) => {
  const state = useContext(FormContext);

  const [showOthers, setShowOthers] = useState(!!state.others);

  const checkList = [
    "Exchange Rates",
    "Transaction Limits",
    "Long Onboarding Process",
  ];

  let sel = state.frustration;
  function handleCheckboxChange(key) {
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    state.setFrustration(sel);
  }

  const handlePageSwitch = (e) => {
    e.preventDefault();
    if (!showOthers && state.others.length) {
      state.setOthers("");
    }
    changeScreen("screenSix");
  };

  const handleOthers = (e) => {
    e.preventDefault();
    state.setOthers(e.target.value);
  };

  return (
    <>
      <MeetComponent
        title='What has been your Major frustration with virtual Card Providers?'
        icon={
          <IconComponent changeScreen={changeScreen} backPage={"screenThree"} />
        }
      >
        <p className='para'>(You can check multiple boxes)</p>

        {checkList.map((item, index) => (
          <label key={item} className='container'>
            <input
              className='input-tag'
              value={item}
              type={"checkbox"}
              checked={state.frustration.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            {item}
            <span class='checkmark'></span>
          </label>
        ))}

        <label className='container'>
          <input
            className='input-tag'
            onChange={() => setShowOthers(!showOthers)}
            type='checkbox'
            checked={showOthers}
          />
          Others
          <span className='checkmark'></span>
        </label>

        {showOthers && (
          <input
            name='others'
            type='text'
            placeholder='Others'
            required
            value={state.others}
            onChange={handleOthers}
            className='input-field others-box'
          />
        )}

        <div className='screen-four-btn'>
          <ButtonComponent
            text='Next'
            className=''
            onClick={handlePageSwitch}
          />
        </div>
      </MeetComponent>
    </>
  );
};

export default ScreenFour;
