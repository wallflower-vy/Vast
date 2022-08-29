import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import "../ScreenThree/index.css";
import "./index.css";
import IconComponent from "../IconComonent";
import { FormContext } from "../../store";

const ScreenFour = ({ changeScreen }) => {
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

  const state = useContext(FormContext);

  const [showOthers, setShowOthers] = useState(false);

  const [others, setOthers] = useState("");

  const handlePageSwitch = (e) => {
    e.preventDefault();
    if (showOthers && others.length) {
      checkList.push(others);
    }
    setOthers("");
    setShowOthers(!others);
    state.setFrustration(checkList);
    changeScreen("screenSix");
  };

  const handleOthers = (e) => {
    e.preventDefault();
    setOthers(e.target.value);
  };

  const checkList = ["Apple", "Banana", "Tea", "Coffee"];

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
            <input value={item} type={"checkbox"} onChange={handleCheck} />
            {item}
            <span class='checkmark'></span>
          </label>
        ))}

        <label className='container'>
          <input onChange={() => setShowOthers(!showOthers)} type='checkbox' />
          Others
          <span className='checkmark'></span>
        </label>

        {showOthers && (
          <input
            name='others'
            type='text'
            placeholder='Others'
            classname='input-field'
            required
            onChange={handleOthers}
            className='input-field'
          />
        )}

        <div className='button-box screenfour-btn'>
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
