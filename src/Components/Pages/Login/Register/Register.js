import React from "react";
import { Link } from "react-router-dom";
import './Register.module.css'

const Register = () => {
  return (
    <div className="container">
      <div className="myContainer">
        <div className="input_wrap">
          <h1>Sign Up</h1>
          <form action="">
            <div className="input_items">
              <label>
                Your Name <span>*</span>
              </label>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input_items">
              <label>
                Your Email <span>*</span>
              </label>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input_items">
              <label>
                Your Password <span>*</span>
              </label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input_items">
              <button type="submit"> Create Account</button>
            </div>
          </form>
          <div className="inner_input">
            <span>
              Already have an account? <Link to="/login"> Login </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
