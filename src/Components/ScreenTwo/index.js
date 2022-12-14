import React, { useContext, useState } from "react";
import MeetComponent from "../MeetComponent";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComonent";
import { FormContext } from "../../store";
import Jump from 'react-reveal/Jump';

const ScreenTwo = ({ changeScreen }) => {
  const state = useContext(FormContext);

  const [form, setForm] = useState({
    firstName: state.firstName,
    email: state.email,
  });

  const handlePageSwitch = (e) => {
    e.preventDefault();
    state.setName(form);
    changeScreen("screenThree");
  };
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
        <form onSubmit={handlePageSwitch}>
          <input
            type='text'
            value={form.firstName}
            placeholder='Enter First Name here'
            className='input-field'
            required
            name='firstName'
            onChange={handleFormChange}
          />

          <input
            name='email'
            value={form.email}
            type='email'
            placeholder='Enter email address here'
            className='input-field'
            required
            onChange={handleFormChange}
          />
          <Jump>
          <div className='button-box'>
            <ButtonComponent 
             
              disabled={!form.email && !form.firstName}
              text='Next'
              type='submit'
            />
          </div>
          </Jump>
        </form>
      </MeetComponent>
    </>
  );
};

export default ScreenTwo;
