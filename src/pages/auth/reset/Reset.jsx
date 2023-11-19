import React from "react";
import reset from "../../images/Forgot password-amico.png";

import { PiLockKeyOpen } from "react-icons/pi";
import "./Reset.css"
import { Link } from "react-router-dom";

function Reset() {
  return (
    <div className="main-container">
      <section className="image-container">
        <img src={reset} alt="reset" />
      </section>

      <section className="form-container">
        <p className="tittle">sign up</p>

        <div className="form">

          
        </div>

        <div className="password">

          <span className="email-input">

            <PiLockKeyOpen className="icon" />

            <input
              type="password"
              placeholder="New Password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
            />

            <p className="description">
              Password must contain at least 8 chars, [A-Z],[a-z],[0-9],[@#&]
            </p>
          </span>
          
          <span className="email-input">
            <PiLockKeyOpen className="icon" />
            <input
              type="password"
              placeholder="Confirm Passowrd"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
            />
          </span>
        </div>
        <section className="actions">
          <button type="submit" className="button">
            Reset
          </button>
          <p className="already-account">
            I already have an account? <Link to="/login">Sign In</Link>
          </p>
        </section>
        
        
      </section>
    </div>
  );
}

export default Reset;
