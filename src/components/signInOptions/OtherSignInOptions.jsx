import React from "react";
import "./OtherSignIn.css";

import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleLine } from "react-icons/ri";

const OtherSignInOptions = ({ signIn }) => {
  return (
    <div className="other-sign-in-container">
      <div className="other-sign-in-option facebook">
        <RiFacebookCircleLine size={40} className="other-icon" />
        <div className="other-sign-in-text">
          {signIn ? "Sign in with Facebook" : "Continue with Facebook"}
        </div>
      </div>
      <div className="other-sign-in-option google">
        <FcGoogle size={40} className="other-icon" />
        <div className="other-sign-in-text">
          {signIn ? "Sign in with Google" : "Continue with Google"}
        </div>
      </div>
    </div>
  );
};

export default OtherSignInOptions;
