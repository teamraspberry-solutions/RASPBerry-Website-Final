import React, { useState } from 'react';
import './NavBar.css';
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
      <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
        <li><a href="../main_page/Home.html" className="active">Home</a></li>
        <li><a href="../team_page/team.html">Team</a></li>
        <li><a href="../sponsorship_page/sponsorship.html">Sponsorship</a></li>
        <li><a href="../gallery_page/gallery.html">Gallery</a></li>
        <li><a href="../features_page/features.html">Features</a></li>
        <li><a href="../Contact Us/contact.html">Contact Us</a></li>
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
