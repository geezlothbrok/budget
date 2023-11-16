import React from "react";
import "./Register.css";
import register from "../../images/register.jpg";

import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyOpen } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main-container">
      <section className="image-container">
        <img src={register} alt="Sign up" />
      </section>

      <section className="form-container">
        <p className="tittle">sign up</p>
        <div className="form">
          <span className="email-input">
            <TfiEmail className="icon"/>
            <input type="email" placeholder="Email @" />
          </span>
        </div>

        <div className="password">
          <span
            className="email-input"
            required
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="none"
            aria-autocomplete="none">
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
            <p className="description">Password must contain at least 8 chars, [A-Z],[a-z],[0-9],[@#&]</p>
          </span>
          <span className="email-input">
            <PiLockKeyOpen  className="icon"/>
            <input
              type="password"
              placeholder="Repeat Passowrd"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
            />
          </span>
        </div>
        <section className="actions">
          <button type="submit" className="button">
            Sign Up
          </button>
          <p className="already-account">
            I already have an account? <Link to="/login">Sign In</Link>
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

export default Register;
