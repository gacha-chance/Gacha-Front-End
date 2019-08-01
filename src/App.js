import React from "react";
import Forms from "./components/LoginComponents/Forms";
import Calculator from './components/CalcComponents/index';
import './App.scss';
import {Route} from 'react-router-dom'
import SavedPage from "./components/SavedComponents/SavedPage";
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Forms} />
      <Route path="/calc" component={Calculator} />
      <PrivateRoute path="/saved" component={SavedPage} />
    </div>
  )
}

export default App;
