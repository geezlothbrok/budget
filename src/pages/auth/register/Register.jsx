import React, { useState } from "react";
import "./Register.css";
import register from "../../images/register.jpg";
import Loader from "../../../components/loader/Loader";

// REACT ICONS IMPORT
import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyOpen } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

// REACT ROUTER DOM IMPORT
import { Link, useNavigate } from "react-router-dom";

// REACT TOASTIFY IMPORT
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// FIREBASE AUTH IMPORT
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from "../../../firebase/config"

function Register() {

  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider()

// CREATE USER WITH E-MAIL AND PASSWORD FUNCTION
  const createUser = (e) => {
    e.preventDefault();
    if(password !== cPassword){
      toast.error("Passwords do not match")
    };
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    
    toast.success("Account Registration Success")
    setIsLoading(false)
    navigate("/login")
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
    
  };

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    toast.success("Login Successful");
    navigate("/");
    
  }).catch((error) => {
    toast.error(error.message)
    
  });
  };
  return (
    <>
    {isLoading && <Loader />}
    <form className="main-container" onSubmit={createUser}>
      <section className="image-container">
        <img src={register} alt="Sign up" />
      </section>

      <section className="form-container">
        <p className="tittle">sign up</p>

        <div className="form">

          <span className="email-input">

            <TfiEmail className="icon" />

            <input
              type="email"
              placeholder="Email @"
              required
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="none"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
          </span>
        </div>

        <div className="password">

          <span className="email-input">

            <PiLockKeyOpen className="icon" />

            <input
              type="password"
              placeholder="Password"
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="description">
              Password must contain at least 8 chars, [A-Z],[a-z],[0-9],[@#&]
            </p>
          </span>
          
          <span className="email-input">
            <PiLockKeyOpen className="icon" />
            <input
              type="password"
              placeholder="Repeat Passowrd"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </span>
        </div>
        <section className="actions">
          <button type="submit" className="button" onClick={createUser}>
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
          <button type="submit" className="google" onClick={googleSignIn}>
            <span className="google-icon">
              <FcGoogle />
            </span>
            Google
          </button>
        </div>
      </section>
    </form>
    </>
  );
}

export default Register;
