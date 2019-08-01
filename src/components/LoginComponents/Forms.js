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
    <div>
      <div>
        <label>Login</label>
        <Login />
      </div>
      <hr />
      <div>
        <label>Sign Up</label>
        <SignUp />
      </div>
    </div>
  );
};

export default Forms;
