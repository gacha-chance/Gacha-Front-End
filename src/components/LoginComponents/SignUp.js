import React, { useState } from "react";
import useSignUp from "./useSignUp";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({username: '', password: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`https://gacha-chance.herokuapp.com/api/register`, values)
    .then(res => {
      console.log(res.data)
    })
  }

  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
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
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
