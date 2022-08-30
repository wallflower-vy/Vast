import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "../ScreenThree/index.css";
import "./index.css";
import IconComponent from "../IconComonent";
import { FormContext } from "../../store";

const ScreenFour = ({ changeScreen }) => {
  const state = useContext(FormContext);

  const [showOthers, setShowOthers] = useState(false);
  const [others, setOthers] = useState("");

  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handlePageSwitch = (e) => {
    e.preventDefault();
    if (showOthers && others.length) {
      checked.push(others);
      // setOthers("");
      setShowOthers(!others);
    }
    state.setFrustration(checked);
    changeScreen("screenSix");
  };

  const handleOthers = (e) => {
    e.preventDefault();
    setOthers(e.target.value);
  };

  const checkList = [
    "Exchange Rates",
    "Transaction Limits",
    "Long Onboarding Process",
  ];

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
              onChange={handleCheck}
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
            onChange={handleOthers}
            className='input-field others-box'
          />
        )}

        <div className=' screen-four-btn'>
          <ButtonComponent
            text='Next'
            className=''
            onClick={handlePageSwitch}
          />
        </div>
        {/* </form> */}
      </MeetComponent>
    </>
  );
};

export default ScreenFour;
