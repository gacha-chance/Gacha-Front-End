import React, { useState } from "react";
import Calculator from "./../CalcComponents/index";
import Forms from "./../LoginComponents/Forms";
import SavedPage from "./../SavedComponents/SavedPage";

const Nav = () => {
  const [bio, setBio] = useState("");
  return (
    <div>
      <div className="App">
        <div className="Nav">
          <button onClick={() => setBio(<Forms />)}>Login/SignUp</button>

          <button onClick={() => setBio(<Calculator />)}>Calculator</button>

          <button onClick={() => setBio(<SavedPage />)}>Saved List</button>
        </div>
        <hr />
        <div>{bio}</div>
      </div>
    </div>
  );
};
export default Nav;
