import React, { useEffect, useState } from "react";
import "../loginAndSignUp/LoginAndSignUp.css";

import { isEmail } from "validator";

import OtherSignInOptions from "../signInOptions/OtherSignInOptions";
import AuthService from "../../AuthService";
import UnderlinedTextInput from "../components/UnderlinedTextInput";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  //passwords visibility
  const [passwordShow, setPasswordShow] = useState(false);
  const [repeatPasswordShow, setRepeatPasswordShow] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = () => {
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
    if (checkPasswordMatch()) {
      setInvalidMessage(checkPasswordMatch());
      return;
    }
    AuthService.register(email, password)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log("error registering: ", e);
      });
  };

  const checkEmail = () => {
    if (!isEmail(email)) {
      return "Email must be a valid address.";
    } else {
      return false;
    }
  };

  const checkPassword = () => {
    if (password.length < 6 || password.length > 40) {
      return "The password must be between 6 and 40 characters.";
    } else {
      return false;
    }
  };

  const checkPasswordMatch = () => {
    if (password !== repeatPassword) {
      return "Passwords must match.";
    } else {
      return false;
    }
  };

  const togglePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const toggleRepeatPasswordShow = () => {
    setRepeatPasswordShow(!repeatPasswordShow);
  };

  useEffect(() => {
    setEmailInvalid(false);
    setPasswordInvalid(false);
  }, [email, password, repeatPassword]);

  return (
    <div className="login-signup-container">
      <UnderlinedTextInput
        label={"Email"}
        isInvalid={emailInvalid}
        value={email}
        onValueChange={handleEmailChange}
      />

      <UnderlinedTextInput
        label={"Password"}
        isInvalid={passwordInvalid}
        value={password}
        onValueChange={handlePasswordChange}
        type={"password"}
      />

      <UnderlinedTextInput
        label={"Repeat Password"}
        isInvalid={passwordInvalid}
        value={repeatPassword}
        onValueChange={handleRepeatPasswordChange}
        type={"password"}
      />

      {invalidMessage && invalidMessage.length > 1 && (
        <div className="invalid-message-container">{invalidMessage}</div>
      )}

      <div className="login-button-container">
        <button className="login-button" onClick={handleSubmit}>
          Start Your Free Trial
        </button>
      </div>
      <div className="or-container">Or</div>
      <OtherSignInOptions signIn={false} />
    </div>
  );
};

export default SignUp;
