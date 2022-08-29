import "./index.css";

import React from "react";

const ButtonComponent = ({ text, cb, ...rest }) => {
  return (
    <>
      {/* <a href ="" className='button' onClick={cb}>{text}</a> */}
      <button onClick={cb} {...rest}>
        {text}
      </button>
    </>
  );
};

export default ButtonComponent;
