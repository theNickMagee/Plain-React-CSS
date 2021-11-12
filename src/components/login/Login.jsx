import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import OtherSignInOptions from "../signInOptions/OtherSignInOptions";

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
    <div className="login-signup-container">
      <div className="label-input-container">
        <div className="field-label">Email</div>
        {/* <MdEmail className="form-icon" size={20} style={{}} /> */}
        <input
          className="form-input"
          type="text"
          value={email}
          placeholder="Enter your email here"
          onChange={handleEmailChange}
        />
        {/* <span className="input-border" /> */}
      </div>

      <div className="label-input-container">
        <div className="field-label">Password</div>
        {/* <RiLockPasswordFill className="form-icon" size={20} style={{}} /> */}
        <input
          className="form-input"
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <span className="input-border" /> */}
      </div>
      <div className="login-button-container">
        <button className="login-button">Log In</button>
        <div className="forgot-password-click">Forgot Your Password? </div>
      </div>
      {/* <div className="forgot-password-container"></div> */}
      <div className="or-container">Or</div>
      <OtherSignInOptions signIn={true} />
    </div>
  );
};

export default Login;
