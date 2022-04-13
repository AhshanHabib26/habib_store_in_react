import React, { useRef } from "react";
import { Link } from "react-router-dom";
import auth from "../../../../app_firbase_init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);

  const handleCreateUser =  e =>{
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

   createUserWithEmailAndPassword(email, password)

  }



  return (
    <div className="container">
      <div className="myContainer">
        <div className="input_wrap">
          <h1>Register</h1>
          <form onSubmit={handleCreateUser}>
            <div className="input_items">
              <label>
                Your Name <span>*</span>
              </label>
              <input type="text"  placeholder="Your Name" required />
            </div>
            <div className="input_items">
              <label>
                Your Email <span>*</span>
              </label>
              <input ref={emailRef}  type="email" placeholder="Your Email" required />
            </div>
            <div className="input_items">
              <label>
                Your Password <span>*</span>
              </label>
              <input ref={passwordRef}  type="password" placeholder="Your Password" />
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
