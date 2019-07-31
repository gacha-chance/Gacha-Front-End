import React, { useState } from "react";
import axios from 'axios';
import { connect } from 'react-redux'

const Form = (props) => {
  const [values, setValues] = useState({username: '', password: ''})

  function handleLogin(e) {
    e.preventDefault()
    axios.post('https://gacha-chance.herokuapp.com/api/login', values)
    .then(res => {
      localStorage.setItem('token', res.data.token);
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
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
