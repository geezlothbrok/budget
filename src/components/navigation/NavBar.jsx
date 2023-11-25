import React, { useState } from 'react';
import { FaBars, FaGoogleWallet, FaTimes, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';

import "./NavBar.css"
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);

  const navigate = useNavigate()

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  };

 const hideMenu = () => {
    setMenuOpen(false)
  };

  const logOut = () => {
    signOut(auth).then(() => {
      toast.success("Logout Success");
      navigate("/login")
    }).catch((error) => {
      toast.error(error.message)
    });
  };
  return (
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
            Hello,
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
  )
}

export default NavBar