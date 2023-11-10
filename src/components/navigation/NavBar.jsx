import React from "react";
import "./NavBar.css";
import { FaGoogleWallet } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
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
            <NavLink to = "/settings">settings</NavLink>
          </li>
          <li>
            <NavLink to = "/profile">profile</NavLink>
          </li>
          <li>
            <NavLink to = "/history">history</NavLink>
          </li>
          <li>
            <NavLink to = "/add">add new</NavLink>
          </li>
        </ul>

        <ul className="toogle-mobile">
          <li>
            <button className="open-menu">
              <HiMenuAlt4 />
            </button>
          </li>
          <li>
            <button className="close-menu">
              <IoClose />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
