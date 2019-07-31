// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Forms() {
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
}

export default Forms;
