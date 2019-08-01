import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://gacha-chance.herokuapp.com/api/register`, values)
      .then(res => {
        console.log(res.data);
      });
  };

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <hr />
      <button type="submit" className="button is-block is-info is-fullwidth">
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
