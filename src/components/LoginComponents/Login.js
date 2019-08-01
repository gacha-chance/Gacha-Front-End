import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ username: "", password: "" });

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("https://gacha-chance.herokuapp.com/api/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
      });
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="button is-block is-info is-fullwidth">
        Login
      </button>
    </form>
  );
};

export default Form;
