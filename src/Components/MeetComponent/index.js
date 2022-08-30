import React from "react";
import "./index.css";
import phone3 from "../../assets/gif1.gif";

const MeetComponent = ({ title, icon, children }) => {
  return (
    <div className='meet-main-box'>
      <div className='meet-image-box'>
        <img src={phone3} className='phone3 ' alt='phone3' />
      </div>
      <div className='meet-left-box'>
        {icon}
        <div className='title-box'>
          <h1>{title}</h1>
        </div>
        <form className='form-box'>{children}</form>
      </div>
    </div>
  );
};

// export const FormContext = React.createContext({
//   form: {},
//   handleFormChange: () => {},
// });

export default MeetComponent;

// function Form(props) {
//   const { children } = props;

//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//     needs: "",
//     frustration: [],
//     used: null,
//   });

//   const handleFormChange = (event) => {
//     console.log(event);
//     event.preventDefault();
//     // Get the name of the field that caused this change event
//     // Get the new value of this field
//     const { name, value } = event.target;

//     // Assign new value to the appropriate form field
//     const updatedForm = {
//       ...form,
//       [name]: value,
//     };

//     console.log("Form changed: ", updatedForm);

//     // Update state
//     setForm(updatedForm);
//   };

//   return (
//     <form className='form-box'>
//       <FormContext.Provider
//         value={{
//           form,
//           handleFormChange,
//         }}
//       >
//         {children}
//       </FormContext.Provider>
//     </form>
//   );
// }
