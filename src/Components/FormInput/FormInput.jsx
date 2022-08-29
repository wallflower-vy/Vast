// import { useContext } from "react";
// import { FormContext } from "../MeetComponent";

// function FormInput(props) {
//   const {
//     label,
//     type = "text",
//     name,
//     value,
//     classname,
//     labelclass,
//     item,
//     text,
//     ...rest
//   } = props;

//   const formContext = useContext(FormContext);
//   const { form, handleFormChange } = formContext;

//   return (
//     <>
//       {type !== "radio" && (
//         <input
//           type={type}
//           name={name}
//           value={form[name]}
//           onChange={handleFormChange}
//           className={classname}
//           {...rest}
//         />
//       )}
//       {type === "radio" && (
//         <label class='container'>
//           {text}
//           <input type='radio' />
//           <span class='checkmark'></span>
//         </label>
//       )}

//       {type === "checkbox" && (
//         <label key={item} className='container'>
//           <input value={form[name]} type={type} onChange={handleFormChange} />
//           {item}
//           <span class='checkmark'></span>
//         </label>
//       )}
//     </>
//   );
// }

// export default FormInput;
