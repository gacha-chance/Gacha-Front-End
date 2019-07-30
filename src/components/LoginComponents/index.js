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
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Forms() {
  return (
    <div>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default Forms;
