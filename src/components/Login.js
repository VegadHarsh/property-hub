import React from 'react';
import '../CSS/Login.css';
import Loader from '../pages/Loader';

const Login = () => {
  return (
    <>
      <Loader />
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-field">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button className="submit-btn" type="submit">Login</button>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
