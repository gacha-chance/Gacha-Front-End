import React from "react";

export default function SignUpForm() {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form>
        {/* Make the onSubmit */}
        <div>
          <label>First Name </label>
          <input
            type="text"
            id="firstName"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name </label>
          <input
            type="text"
            id="lastName"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

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
          <label>Re-type Password</label>
          <input
            type="text"
            id="passwordCheck"
            className="FormField__Input"
            placeholder="Enter your full name"
            name="passwordCheck"
            value={passwordCheck}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* Need to add onSubmit */}
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
