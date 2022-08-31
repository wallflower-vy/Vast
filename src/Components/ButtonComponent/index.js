import "./index.css";
import { ReactComponent as Loader } from "../../assets/loader.svg";

import React from "react";

const ButtonComponent = ({ text, cb, loading, ...rest }) => {
  return (
    <>
      {/* <a href ="" className='button' onClick={cb}>{text}</a> */}
      <button onClick={cb} {...rest}>
        {loading ? <span>{<Loader />}</span> : <>{text}</>}
      </button>
    </>
  );
};

export default ButtonComponent;
