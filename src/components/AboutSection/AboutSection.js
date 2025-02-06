import React, { useEffect, useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.querySelector(".about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutSection) observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about ${isVisible ? "fade-in-up" : ""}`}>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          "Welcome to Project Kyan! We're passionate about creating innovative
          solutions that enhance learning and productivity. Our smart desk robot
          is a unique blend of functionality and intelligence.
          <br />
          <br />
          <strong>Everyday Use:</strong> Experience a more organized and efficient
          workspace. Our robot helps with scheduling reminders, managing to-do
          lists, and even controlling smart home devices.
          <br />
          <br />
          <strong>Educational Assistance:</strong> Designed for students, it
          provides personalized learning plans, interactive study sessions, and
          helps maintain focus and motivation.
          <br />
          <br />
          We believe technology should empower and inspire. Our mission is to
          create a smarter, more enjoyable learning and work experience for
          everyone."
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
