import React from "react";
import useFormValidation from "./auth/useFormValidation";
import validateAuth from "./auth/validateAuth";
import "./styles.css";



const INITIAL_STATE = {
  email: "",
  password: ""
};

function Register() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);

export default function SignUpForm() {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Make the onSubmit */}
        <div>
          <label>Email Address</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={values.email}
              className={errors.email && "error-input"}
              autoComplete="off"
              placeholder="Your email address"
            />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && "error-input"}
            name="password"
            type="password"
            placeholder="Choose a safe password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div>
          {/* Need to add onSubmit */}
          <button disabled={isSubmitting} type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
