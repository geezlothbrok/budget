import React, { useState } from "react";
import reset from "../../images/Forgot password-amico.png";

import { TfiEmail } from "react-icons/tfi";
import "./Reset.css"
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

function Reset() {

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(email === "") {
      toast.error("Please enter your email");  
    };

    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false);
    toast.success("Check your email for a reset link")
  })
  .catch((error) => {
    setIsLoading(false);
    toast.error(error.message);   
  });
  }; 
  return (
  <>
  {isLoading && <Loader />}
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

            <TfiEmail className="icon" />

            <input
              type="email"
              placeholder="email"
              required
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          
        </div>
        <section className="actions">
          <button type="submit" className="button" onClick={resetPassword}>
            Reset
          </button>
          <p className="already-account">
            I already have an account? <Link to="/login">Sign In</Link>
          </p>
        </section>
        
        
      </section>
    </div>
    </>
  );
}

export default Reset;
