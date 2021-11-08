import React from "react";
import "./Status.css";

const Status = ({ loggedIn }) => {
  return (
    <div className="status-container">
      Status:
      <div className={loggedIn ? "green" : "red"}>
        {loggedIn ? "Logged In" : "Not Logged In"}
      </div>
    </div>
  );
};

export default Status;
