import React, { useState } from "react";
import Calculator from "./../CalcComponents/index";
import Forms from "./../LoginComponents/Forms";
import SavedPage from "./../SavedComponents/SavedPage";

const Nav = () => {
  const [page, setPage] = useState("");
  return (
    <div>
      <div className="App">
        <div className="Nav">
          <button onClick={() => setPage(<Forms />)}>Login/SignUp</button>

          <button onClick={() => setPage(<Calculator />)}>Calculator</button>

          <button onClick={() => setPage(<SavedPage />)}>Saved List</button>
        </div>
        <hr />
        <div>{page}</div>
      </div>
    </div>
  );
};
export default Nav;
