import React, { useState } from "react";
import "./NavBar.css";
import { FaGoogleWallet } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function NavBar() {

  const [showMobileMenu, setShowMobileMenu] = useState (false);

  const toogleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log("hello");
  };

  const hideMenu = () => {
    setShowMobileMenu(false)
    console.log("i can hide");
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <p className="logo-text">
            
            <span className="logo-icon">
              <FaGoogleWallet />
            </span>
            Budget.io
          </p>
        </div>

        <ul className="user-profile">
          <li className="user-image">
            <BiUserCircle />
          </li>
          <li className="user-name">
            <h3>hi, user</h3>
          </li>
        </ul>

        <ul className="mobile-links">
          <li>
            <NavLink to = "/settings" className= "active">settings</NavLink>
          </li>
          <li>
            <NavLink to = "/profile" className= "active">profile</NavLink>
          </li>
          <li>
            <NavLink to = "/history" className= "active">history</NavLink>
          </li>
          <li>
            <NavLink to = "/add"  className= "active">add new</NavLink>
          </li>
        </ul>

        <div>
            {showMobileMenu ? (<button className= "open-menu" onClick={toogleMenu}>
              <HiMenuAlt4 />
            </button>) : (<button className="close-menu" onClick={hideMenu}>
              <IoClose />
            </button>)}
         
            
         </div>
      </div>
    </nav>
  );
}

export default NavBar;
