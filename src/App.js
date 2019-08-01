import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Calculator from "./components/CalcComponents/index";
import Forms from "./components/LoginComponents/Forms";
import Nav from "./components/NavBar/Nav";
import NavBar from "./components/NavBar/NavBar";
import { PrivateRoute } from "./components/PrivateRoute";

import SavedPage from "./components/SavedComponents/SavedPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <NavBar />


      <Route path="/login" component={Forms} />
      <Route path="/calc" component={Calculator} />
      <PrivateRoute path="/saved" component={SavedPage} />
      <div>
      </div>
    </div>
  );
}
// const styles = StyleSheet.create
export default App;
