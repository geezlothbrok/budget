import React, { useState } from "react";

import login from "../../images/Login-rafiki.png";
import "./Login.css"

import { TfiEmail } from "react-icons/tfi";
import { PiLockKeyOpen } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  const provider = new GoogleAuthProvider();

  const loginUser =(e) => {
    e.preventDefault();
    setIsLoading(true);
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false);
    toast.success("Login Successful");
    navigate("/")
  })
  .catch((error) => {
    toast.error( error.message);
    setIsLoading(false);
  });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };
  return (
    <>
    {isLoading && <Loader />}
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
            aria-autocomplete="none" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
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
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </span>
          
        </div>
        <section className="actions">
          <button type="submit" className="button" onClick={loginUser}>
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
          <button type="submit" className="google" onClick={googleSignIn}>
            <span className="google-icon">
              <FcGoogle />
            </span>
            Google
          </button>
        </div>
      </section>
    </div>
    </>
  );
}

export default Login;
