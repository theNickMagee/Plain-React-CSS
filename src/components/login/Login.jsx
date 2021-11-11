import React, { useState } from "react";

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
        <input
          className="login-sign-up-form-inputs"
          type="text"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="password-field">
        <input
          className="login-sign-up-form-inputs"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="login-button-container">
        <button className="login-button">Log In</button>
      </div>
    </div>
  );
};

export default Login;
