import React from 'react';
import "./Register.css";
import register from "../../images/register.jpg";

import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyOpen } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="main-container">
      <section className="image-container">
        <img src= {register} alt="Sign up" />
      </section>

      <section className="form-container">
        <p className="tittle">sign up</p>
        <div className="form">
          <span className="email-input">
          <TfiEmail /> 
          <input type="email" />
          </span>
        </div>

        <div className="password">
        <span className="email-input">
          <PiLockKeyOpen /> 
          <input type="password" />
          </span>
        <span className="email-input">
          <PiLockKeyOpen /> 
          <input type="password" />
          </span>
        </div>
        <section className="actions">
        <button type="submit" className='button'>Sign Up</button>
        <p className="already-account">
          I already have an account? <Link to = "/login">Sign In</Link>
        </p>
      </section>
      <div className="line">
      <span className="left-line"></span>
        <span className="line-text">or</span>
        <span className="right-line"></span>
      </div>
        <div className="google-button">
          <button type="submit"><span>
            <FcGoogle /></span>Google</button>
        </div>
      </section>     
    </div>
  )
}

export default Register