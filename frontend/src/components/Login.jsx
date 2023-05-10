import React, { useState } from "react";
import "../styles/_login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form className="login">
      <h2 className="login__heading">Login</h2>
      <div className="login__field login__field--email">
        <label htmlFor="email" className="login__field__label">Email</label>
        <input
          type="email"
          id="email"
          className="login__field__input"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="login__field login__field--password">
        <label htmlFor="password" className="login__field__label">Password</label>
        <input
          type="password"
          id="password"
          className="login__field__input"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="login__button" onClick={handleSubmit}>
        Log In
      </button>
    </form>
  );
};

export default Login;
