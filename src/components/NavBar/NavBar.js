import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "./NavBar.css";
import logo from '../../Media/R_Robot.png';

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };


  const closeNav = () => {
    setIsNavActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on link click
  };

  return (
    <nav>
      <div className="logo">
        <a href="/">
        <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className={`nav-links ${isNavActive ? "nav-active" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeNav}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeNav}>Timeline</NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeNav}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeNav}>Contact</NavLink>
        </li>
      </ul>
      <div className={`burger ${isNavActive ? 'burger-open' : ''}`} onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
