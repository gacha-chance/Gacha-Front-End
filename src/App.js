import React from "react";
import Forms from "./components/LoginComponents/Forms";
import Calculator from './components/CalcComponents/index';
import './App.scss';
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route path="/login" component={Forms} />
      <Route path="/calc" component={Calculator} />
    </div>
  )
}

export default App;
