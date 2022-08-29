import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComonent";
import { FormContext } from "../../store";

const ScreenTwo = ({ changeScreen, handleSwitchBack }) => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
  });

  const state = useContext(FormContext);

  const handlePageSwitch = (e) => {
    e.preventDefault();
    // console.log(form);
    state.setName(form);
    changeScreen("screenThree");
  };
  // const { form: formState, handleFormChange } = useContext(FormContext);

  // const [disable, setDisable] = useState(true);

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
  };

  return (
    <>
      <MeetComponent
        title='Can we meet you😊?'
        icon={
          <IconComponent changeScreen={changeScreen} backPage={"screenOne"} />
        }
      >
        <input
          type='text'
          placeholder='Enter First Name here'
          classname='input-field'
          required
          name='firstName'
          onChange={handleFormChange}
        />

        <input
          name='email'
          type='email'
          placeholder='Enter email address here'
          classname='input-field'
          required
          onChange={handleFormChange}
        />

        <div className='button-box'>
          <ButtonComponent
            onClick={handlePageSwitch}
            // disabled={disable}
            text='Next'
            type='submit'
          />
        </div>
      </MeetComponent>
    </>
  );
};

export default ScreenTwo;
