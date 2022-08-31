import { createContext, useReducer } from "react";

const initialState = {
  firstName: "",
  email: "",
  needs: "",
  frustration: [],
  used: true,
  others: "",
};

export const FormContext = createContext(initialState);

const FormComponentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const setName = (data) => {
    dispatch({
      type: "DISPATCH_NAME",
      payload: data,
    });
  };

  const setUsed = (data) => {
    dispatch({
      type: "DISPATCH_USED",
      payload: data,
    });
  };

  const setNeed = (data) => {
    dispatch({
      type: "DISPATCH_NEEDS",
      payload: data,
    });
  };

  const setFrustration = (data) => {
    dispatch({
      type: "DISPATCH_FRUSTRATION",
      payload: data,
    });
  };

  const setOthers = (data) => {
    dispatch({
      type: "DISPATCH_OTHERS",
      payload: data,
    });
  };

  const contextValue = {
    ...state,
    setName,
    setNeed,
    setFrustration,
    setUsed,
    setOthers,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "DISPATCH_NAME":
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
      };
    case "DISPATCH_USED":
      return {
        ...state,
        used: action.payload,
      };
    case "DISPATCH_FRUSTRATION":
      return {
        ...state,
        frustration: action.payload,
      };
    case "DISPATCH_NEEDS":
      return {
        ...state,
        needs: action.payload,
      };
    case "DISPATCH_OTHERS":
      return {
        ...state,
        others: action.payload,
      };
    default:
      break;
  }
};

export default FormComponentProvider;
