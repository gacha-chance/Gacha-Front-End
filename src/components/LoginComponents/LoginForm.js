import React from "react";

export default function LoginForm() {
  return (
    <div>
      <h1>Login Form</h1>

      <form>
        {/* Make the onSubmit */}

        <div>
          <label>UserName</label>
          <input
            type="text"
            id="userName"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            id="password"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* Need to add onSubmit */}
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
