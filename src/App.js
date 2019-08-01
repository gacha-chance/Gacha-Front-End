import React from "react";
import { ImageBackground } from "react-native";
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
    <ImageBackground source={require("./header.jpg")} className="App">
      {/* <img src={BackGroundIMG} alt="gacha background" /> */}
      <NavBar />
      <Route path="/login" component={Forms} />
      <Route path="/calc" component={Calculator} />
      <PrivateRoute path="/saved" component={SavedPage} />
      <div>
        <Nav />
      </div>
    </ImageBackground>
  );
}
// const styles = StyleSheet.create
export default App;
