import React, { useState } from "react";
import "./form.css";
import Login from "./Login";
import SignUp from "./SignUp";

const Forms = () => {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "right-panel-active" : "off");
  }

  return (
    <div className={`container ${toggleState}`} id="container">
      <div className="form-container sign-up-container">
        <SignUp />
      </div>
      <div className="form-container sign-in-container">
        <Login />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={toggle} className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={toggle} className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
