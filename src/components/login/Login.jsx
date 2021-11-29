import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import OtherSignInOptions from "../signInOptions/OtherSignInOptions";

import UnderlinedTextInput from "../components/UnderlinedTextInput";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (checkEmail()) {
      setEmailInvalid(true);
      setInvalidMessage(checkEmail());
      return;
    }
    if (checkPassword()) {
      setPasswordInvalid(true);
      setInvalidMessage(checkPassword());
      return;
    }
  };

  const checkEmail = () => {
    if (!(email && email.length > 1)) {
      return "Email is required.";
    } else {
      return false;
    }
  };

  const checkPassword = () => {
    if (!(password && password.length > 1)) {
      return "A password is required.";
    } else {
      return false;
    }
  };

  useEffect(() => {
    setEmailInvalid(false);
    setPasswordInvalid(false);
  }, [email, password]);

  return (
    <div className="login-signup-container">
      <UnderlinedTextInput
        label={"Email"}
        value={email}
        onValueChange={handleEmailChange}
        placeholder="Enter your email here"
        isInvalid={emailInvalid}
      />

      <UnderlinedTextInput
        label={"Password"}
        isInvalid={passwordInvalid}
        value={password}
        onValueChange={handlePasswordChange}
        type={"password"}
        placeholder="Enter your password here"
      />

      {invalidMessage && invalidMessage.length > 1 && (
        <div className="invalid-message-container">{invalidMessage}</div>
      )}

      <div className="login-button-container">
        <button className="login-button" onClick={submit}>
          Log In
        </button>
        <div className="forgot-password-click">Forgot Your Password? </div>
      </div>
      {/* <div className="forgot-password-container"></div> */}
      <div className="or-container">Or</div>
      <OtherSignInOptions signIn={true} />
    </div>
  );
};

export default Login;
