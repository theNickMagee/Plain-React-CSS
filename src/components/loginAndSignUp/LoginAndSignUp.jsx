import React, { useState } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

import "./LoginAndSignUp.css";
import "./Toggle.css";

const LoginAndSignUp = (props) => {
  const [logInMode, setLogInMode] = useState(true);

  const toggleToSignUp = () => {
    console.log("sign up");
    setLogInMode(false);
  };

  const toggleToLogIn = () => {
    setLogInMode(true);
  };

  return (
    <div className="login-sign-up-container">
      {/* TOP TOGGLE */}
      {/* Because of the toggle requiring absolute positioning, both containers have hard-coded height */}
      <div className="toggle-and-square-container">
        <div className="login-sign-up-toggle-container">
          <div className="toggle-choice" onClick={toggleToLogIn}>
            Login
          </div>
          <div className="toggle-choice" onClick={toggleToSignUp}>
            Sign Up
          </div>
        </div>
        <div className={`toggle-square-container`}>
          <div
            className={`toggle-square  ${logInMode ? "left" : "right"}`}
          ></div>
        </div>
      </div>
      {/* Log in Mode or sign up mode? */}
      {logInMode ? <Login /> : <SignUp />}
    </div>
  );
};

export default LoginAndSignUp;
