import React, { useState } from "react";
import "./UnderlinedTextInput.css";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const UnderlinedTextInput = ({
  label,
  isInvalid,
  value,
  onValueChange,
  type,
  placeholder,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [textType, setTextType] = useState(type || "text");

  const togglePasswordIcon = () => {
    if (!passwordVisible) {
      setTextType("text");
    } else {
      setTextType("password");
    }
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div
      className={`label-input-container ${isInvalid && "invalid"} ${
        isActive && "active"
      }`}
    >
      <div className="field-label">{label}</div>
      <div className="input-container">
        {/* <MdEmail className="form-icon" size={20} style={{}} /> */}
        <input
          className={`form-input ${isInvalid ? "invalid" : ""}`}
          value={value}
          placeholder={placeholder}
          onChange={onValueChange}
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          type={textType}
        />
        {type === "password" &&
          (!passwordVisible ? (
            <AiFillEyeInvisible
              className={"password-icon"}
              size={20}
              onClick={togglePasswordIcon}
            />
          ) : (
            <AiFillEye
              className="password-icon"
              size={20}
              onClick={togglePasswordIcon}
            />
          ))}
      </div>
      {/* <span className="input-border" /> */}
    </div>
  );
};

export default UnderlinedTextInput;
