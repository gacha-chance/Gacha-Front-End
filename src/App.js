import React from "react";
import "./App.css";
import Forms from "./components/LoginComponents/Forms";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Forms />
      </header>
    </div>
  );
}

export default App;
