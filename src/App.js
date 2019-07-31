
import React from "react";
import "./App.css";
import Forms from "./components/LoginComponents/Forms";
import Calculator from './components/CalcComponents/index';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Forms />
      </header>
      <Calculator />
    </div>
  )
}

export default App;
