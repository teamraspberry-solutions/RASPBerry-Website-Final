import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../Media/R_Robot.png";

const NavBar = ({ scrollToSection }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsNavActive(false); // Close menu after clicking
  };

  return (
    <nav>
      <div className="logo">
        <a href="#" onClick={() => handleNavClick("hero")}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className={`nav-links ${isNavActive ? "nav-active" : ""}`}>
        <li>
          <button className="nav-button" onClick={() => handleNavClick("home")}>Home</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavClick("team")}>Team</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavClick("timeline")}>Timeline</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavClick("contact")}>Contact</button>
        </li>
      </ul>
      <div className={`burger ${isNavActive ? "burger-open" : ""}`} onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
