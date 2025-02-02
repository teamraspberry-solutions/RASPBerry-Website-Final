import React from "react";
import "./FooterSection.css";
import Facebook from "./images/facebook.png";
import Instagram from "./images/insta.png";
import LinkedIn from "./images/linkedin.png";
import Twitter from "./images/twitter3.png";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand or Title */}
        <div className="footer-brand">
          <h2>Team RASPBerry</h2>
          <p>Your one-stop platform for AI-driven conversations, real-time insights, and seamless user experiences with Kyan!</p>
          </div>

        {/* Useful Links Section */}
        <div className="footer-links">
          <div className="links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Sponsorship</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-social">
        <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/19vDMcBhWV/" aria-label="Facebook"><img src={Facebook}></img></a>
            <a href="https://x.com/team__RASPBerry?t=vUPV1Z7v53uEaHCLBv-4cw&s=09" aria-label="Twitter"><img src={Twitter}></img></a>
            <a href="https://www.instagram.com/team__raspberry?igsh=dXR4ZWJmeTNhNGs1" aria-label="Instagram"><img src={Instagram}></img></a>
            <a href="https://www.linkedin.com/company/team-raspberry/" aria-label="LinkedIn"><img src={LinkedIn}></img></a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        <p>© 2025 Team RASPBerry. All rights reserved. Crafted by SE-07.</p>
      </div>
    </footer>
  );
};

export default Footer;
