import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import PullToRefresh from "react-js-pull-to-refresh";
import reportWebVitals from './reportWebVitals';
import './fonts/Trap-Black.otf';
import './fonts/Trap-Bold.otf';
import './fonts/Trap-ExtraBold.otf';
import './fonts/Trap-Light.otf';
import './fonts/Trap-Medium.otf';
import './fonts/Trap-SemiBold.otf';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
