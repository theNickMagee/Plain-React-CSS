import React, { useState } from "react";
import "./App.css";

import Status from "./components/status/Status";
import LoginAndSignUp from "./components/loginAndSignUp/LoginAndSignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logOut = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <div className="component-container">
        <Status loggedIn={loggedIn} />
      </div>
      {loggedIn ? (
        <div className="component-container">
          <button onClick={logOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <div className="component-container">
            <LoginAndSignUp />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
