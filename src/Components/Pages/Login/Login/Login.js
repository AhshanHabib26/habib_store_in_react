import React from "react";
import { Link } from "react-router-dom";
import './Login.module.css'

const Login = () => {
  return (
    <div className="container">
      <div className="myContainer">
        <div className="input_area">
          <h1>
            Welcome<span>!</span>
          </h1>
          <form action="">
            <div className="input_items">
              <input type="text" placeholder="Email Or Phone" required />
              <div className="icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input_items">
              <input type="password" placeholder="Password" />
              <div className="icon">
                <i className="fa fa-lock"></i>
              </div>
            </div>

            <div className="input_items">
              <div className="text">
                <small as={Link} to="/">
                  {" "}
                  Forgot Your Password?
                </small>
              </div>
            </div>

            <div className="input_items">
              <input type="submit" value="Sign in" />
            </div>
          </form>
          <div className="social_link">
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fa-brands fa-git"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
          </div>

          <div className="form_info">
            <p>
              Don't have an account? 
              <Link to="/register"> Sign Up</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
