import React, { useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');
      const heroHeight = heroSection.offsetHeight;

      // Apply a slight parallax effect for the background
      const scrollRatio = scrollPosition / heroHeight;
      heroSection.style.backgroundPosition = `center ${scrollRatio * 50}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="overlay">
        <h1>Welcome to Project Kyan</h1>
        <p>Innovating learning and productivity for everyone.</p>
      </div>
    </section>
  );
};

export default HeroSection;