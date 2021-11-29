import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import OtherSignInOptions from "../signInOptions/OtherSignInOptions";

import UnderlinedTextInput from "../components/UnderlinedTextInput";

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
      <UnderlinedTextInput
        label={"Email"}
        isInvalid={false}
        value={email}
        onValueChange={handleEmailChange}
        placeholder="Enter your email here"
      />

      <UnderlinedTextInput
        label={"Password"}
        isInvalid={false}
        value={password}
        onValueChange={handlePasswordChange}
        type={"password"}
        placeholder="Enter your password here"
      />

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
