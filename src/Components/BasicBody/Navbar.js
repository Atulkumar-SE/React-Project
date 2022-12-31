import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {

const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)


  return (
    <div className="nav_container">
      <div className="navbar_main">
        <div className="logo">
          <h1 className="h_logo">AJ</h1>
        </div>
        <div className="menu">
          <ul className={click ? "menu_item active" : "menu_item"}>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes/>) :(<FaBars/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
