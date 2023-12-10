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
import ShowOnLogin, { ShowOnLogout } from '../hidden_links/HiddenLinks';



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
        // const uid = user.uid;
        // console.log(user.displayName);

        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);
  

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
        <ShowOnLogin>
        <div className="user-profile" onClick={hideMenu}>
          <span className="user-image">
            <FaUserCircle />
          </span>
          <span className="user-name">
            Hi, {displayName}
          </span>
        </div>
        </ShowOnLogin>
        <ul className={menuOpen ? "open" : ""} onClick={hideMenu}>
          <ShowOnLogin>
          <li onClick={hideMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          </ShowOnLogin>
          <ShowOnLogout>
          <li onClick={hideMenu}>
            <NavLink to="/login">Login</NavLink>
          </li>
          </ShowOnLogout>
          
          <ShowOnLogin>
          <li onClick={hideMenu}>
            <NavLink to="/add">Add</NavLink>
          </li>
          </ShowOnLogin>

          <ShowOnLogin>
          <li onClick={logOut}>            
            <NavLink>Logout</NavLink>            
          </li>
          </ShowOnLogin>
        </ul>

          <div className="toogle-menu" onClick={openMenu}>
           {menuOpen ? (<FaTimes color='black'/> ) : ( <FaBars color='black'/>)}
          </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar