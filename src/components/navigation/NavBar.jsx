import React, { useState } from 'react';
import { FaBars, FaGoogleWallet, FaTimes, FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import "./NavBar.css"


function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  };

 const hideMenu = () => {
    setMenuOpen(false)
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
          <li onClick={hideMenu}>
            <NavLink to="/login">Logout</NavLink>
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