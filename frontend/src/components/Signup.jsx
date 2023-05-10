import React, { useState } from "react";
import "../styles/_signup.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      // Send API request to sign up user with email and password
      console.log("User signed up");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="signup">
      <h2 className="signup__heading">Sign up</h2>
      <form onSubmit={handleSubmit} className="signup__form">
        <div className="signup__form__field signup__form__field--email">
          <label htmlFor="email" className="signup__form__field__label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="signup__form__field__input"
            required
          />
        </div>

        <div className="signup__form__field signup__form__field--password">
          <label htmlFor="password" className="signup__form__field__label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="signup__form__field__input"
            required
          />
        </div>

        <div className="signup__form__field signup__form__field--confirm-password">
          <label htmlFor="confirm-password" className="signup__form__field__label">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="signup__form__field__input"
            required
          />
        </div>

        <div className="signup__form__field signup__form__field--submit">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
