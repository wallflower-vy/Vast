import "./index.css";

import React from "react";
import Navigation from "./Navigation";


const Layout = ({children}) => {
  return (
    <div className='background-box'>
     <Navigation />
      {children}
    </div>
  );
};

export default Layout;