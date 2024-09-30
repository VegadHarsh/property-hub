import React from 'react';
import '../CSS/SignUp.css';
import Loader from '../pages/Loader';

const SignUp = () => {
  return (
    <>
      <Loader />
      <div className="signup-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <div className="input-field">
            <label>Full Name</label>
            <input type="text" required />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button className="submit-btn" type="submit">Sign Up</button>
          <div className="login-link">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
