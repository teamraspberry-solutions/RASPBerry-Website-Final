import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink instead of Link
import "./NavBar.css";
import logo from '../../Media/R_Robot.png';


const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  console.log(logo); 


  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${isNavActive ? "nav-active" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""}>Timeline</NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink>
        </li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className={`line1 ${isNavActive ? 'toggle' : ''}`}></div>
        <div className={`line2 ${isNavActive ? 'toggle' : ''}`}></div>
        <div className={`line3 ${isNavActive ? 'toggle' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
