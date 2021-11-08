import React, { useState } from "react";

import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-label">Login</div>
        <div className="email-field">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="password-field">
          <input
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
    </div>
  );
};

export default Login;
