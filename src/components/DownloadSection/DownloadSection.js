import React from "react";
import "./DownloadSection.css";
import download1 from "./images/GooglePlay.png";
import download2 from "./images/AppleStore.png";

const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className="spiral-background"></div> {/* SVG Background */}
      
      <div className="content-wrapper">
        {/* Text Content */}
        <div className="content">
          <h1>Download the Kyan Mobile App</h1>
          <p>
            Experience AI-driven conversations on the go! Get real-time insights, adaptive learning, and a seamless experience across all devices.
          </p>

          {/* App Store Links */}
          <div className="apps">
            <a href="https://play.google.com" className="store-button">
              <img src={download1} alt="Google Play" />
            </a>
            <a href="https://apps.apple.com" className="store-button">
              <img src={download2} alt="Apple Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
