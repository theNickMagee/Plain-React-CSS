import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="email-field">
        <div className="icon-input-container">
          <div className="field-label">Email</div>
          {/* <MdEmail className="form-icon" size={20} style={{}} /> */}
          <input
            className="login-sign-up-form-inputs"
            type="text"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <span className="input-border" />
        </div>
      </div>
      <div className="password-field">
        <div className="field-label">Password</div>
        <div className="icon-input-container">
          {/* <RiLockPasswordFill className="form-icon" size={20} style={{}} /> */}
          <input
            className="login-sign-up-form-inputs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="input-border" />
        </div>
      </div>
      <div className="login-button-container">
        <button className="login-button">Log In</button>
      </div>
      <div className="forgot-password-container">
        Forgot Your Password?{" "}
        <span className="forgot-password-click">Click Here</span>
      </div>
    </div>
  );
};

export default Login;
