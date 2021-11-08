import React, { useState } from "react";
import "./LoginAndSignUp.css";

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
    <div className="login-container">
      <div className="login-toggle-container">
        <div className="login-choice" onClick={toggleToLogIn}>
          Login
        </div>
        <div className="login-choice" onClick={toggleToSignUp}>
          Sign Up
        </div>
      </div>
      <div className={`login-square-container`}>
        <div className={`login-square  ${logInMode ? "left" : "right"}`}></div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
