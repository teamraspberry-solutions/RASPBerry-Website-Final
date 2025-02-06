import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ScrollGlow.css";

const ScrollGlow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      setScrollProgress(progress);

      // Get About section position
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const aboutOffset = aboutSection.offsetTop;
        setIsVisible(scrollTop > aboutOffset - 200); 
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={`scroll-glow-container ${isVisible ? "visible" : "hidden"}`}>
      <svg viewBox="0 0 120 1500" className="scroll-glow-svg">
        {/* Background Dimmed Line */}
        <path
          d="M60 0 
             C90 150, 30 300, 60 450 
             C90 600, 30 750, 60 900 
             C90 1050, 30 1200, 60 1350"
          stroke="rgba(77, 184, 184, 0.2)"
          strokeWidth="6"
          fill="none"
          className="scroll-path-bg"
        />
        {/* Glowing Progress Path */}
        <motion.path
          d="M60 0 
             C90 150, 30 300, 60 450 
             C90 600, 30 750, 60 900 
             C90 1050, 30 1200, 60 1350"
          stroke="url(#glowGradient)"
          strokeWidth="6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: scrollProgress }}
          transition={{ duration: 0.3 }}
          className="scroll-path"
        />
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4db8b8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4db8b8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4db8b8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollGlow;
