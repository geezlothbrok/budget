import React, { useEffect, useState } from 'react';
import { FaBars, FaGoogleWallet, FaTimes, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';

import "./NavBar.css"
import { auth } from '../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';



function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  //MONITOR CURRENTLY SIGNED IN USER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName);
        if(displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
          dispatch(REMOVE_ACTIVE_USER());
        }
        
        
        dispatch(
          SET_ACTIVE_USER({
            email : user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid
          })
        )
      } else {
        setDisplayName("");
        
      }
    });
    
  }, [dispatch, displayName])
  

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  };

 const hideMenu = () => {
    setMenuOpen(false)
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setIsLoading(true);
      toast.success("Logout Success");
      setIsLoading(false);
      navigate("/login")
    }).catch((error) => {
      toast.error(error);
      setIsLoading(false);
    });
  };
  return (
    <>
    {isLoading && <Loader />}
    <nav>
      <div className="nav-container">
        <div className="logo-container" onClick={hideMenu}>
          <p className="logo-text">
          <FaGoogleWallet className='logo-image'/>
            Budget.io
          </p>
        </div>

        <div className="user-profile" onClick={hideMenu}>
          <span className="user-image">
            <FaUserCircle />
          </span>
          <span className="user-name">
            Hello, {displayName}
          </span>
        </div>
        <ul className={menuOpen ? "open" : ""} onClick={hideMenu}>
          <li onClick={hideMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink to="/reset">Reset</NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li onClick={logOut}>
            <NavLink>Logout</NavLink>
          </li>
        </ul>

          <div className="toogle-menu" onClick={openMenu}>
           {menuOpen ? (<FaTimes /> ) : ( <FaBars />)}
          </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar