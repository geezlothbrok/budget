import React from 'react';
import "./Loader.css";
import ReactDOM from 'react-dom';

import loader from "../../pages/images/loader.gif";

function Loader() {
  return ReactDOM.createPortal (
    <div className='wrapper'>
       <div className="loader">
        <img src={loader} alt="Loading..." />
       </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader