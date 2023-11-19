import React from "react";

import login from "../../images/Login-rafiki.png";
import "./Login.css"

import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyOpen } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main-container">
      <section className="image-container">
        <img src={login} alt="Sign up" />
      </section>

      <section className="form-container">
        <p className="tittle">sign in</p>
        <div className="form">
          <span className="email-input">
            <TfiEmail className="icon"/>
            <input type="email" placeholder="Email @" required
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="none"
            aria-autocomplete="none" />
          </span>
        </div>

        <div className="password">
          <span
            className="email-input"
            >
            <PiLockKeyOpen  className="icon"/>
            <input
              type="password"
              placeholder="Password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
            />
           
          </span>
          
        </div>
        <section className="actions">
          <button type="submit" className="button">
            Sign In
          </button>
          <p className="already-account">
           <Link to="/reset">Forgot Password?</Link>
          </p>
        </section>
        <div className="line">
          <span className="left-line"></span>
          <span className="line-text">or</span>
          <span className="right-line"></span>
        </div>
        <div className="google-button">
          <button type="submit" className="google">
            <span className="google-icon">
              <FcGoogle />
            </span>
            Google
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
