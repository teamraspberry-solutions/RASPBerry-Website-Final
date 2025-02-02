import React, { useEffect, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutSectionPosition <= windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`about ${isVisible ? 'fade-in-up' : ''}`}>
      <div className="about-content">
        <h1>About Us</h1>
        <p>"Welcome to Project Kyan! We're passionate about creating innovative solutions that enhance learning and productivity. Our smart desk robot is a unique blend of functionality and intelligence.
          <br></br><br></br>
                Everyday Use: Experience a more organized and efficient workspace. Our robot can help with tasks like scheduling reminders, managing your to-do lists, and even controlling smart home devices.
                <br></br><br></br>

                Educational Assistance: Designed with students in mind, our robot offers a range of features to improve learning outcomes. It can provide personalized learning plans, offer interactive study sessions, and help you stay focused and motivated.
                
                We believe that technology should empower and inspire. Our mission is to create a smarter, more enjoyable learning and work experience for everyone."
        </p>
        </div>
    </section>
  );
};

export default AboutSection;
