import React, { useEffect } from "react";
import ScrollGlow from "../components/ScrollGlow/ScrollGlow";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import LiveCounter from "../components/LiveCounter/LiveCounter";
import TeamSection from "../components/TeamSection/TeamSection";
import AchievementsSection from "../components/AchievementsSection/AchievementsSection";
import TimelineSection from "../components/TimelineSection/TimelineSection";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";


const Home = ({ sectionsRef }) => {
  useEffect(() => {
    sectionsRef.current = {
      home: document.getElementById("hero-section"),
      features: document.getElementById("features-section"),
      team: document.getElementById("team-section"),
      timeline: document.getElementById("timeline-section"),
      contact: document.getElementById("contact-section"),
    };
  }, []);

  return (
    <div>
      <ScrollGlow />
      <main id="backtotop">
      <div id="hero-section">
        <HeroSection />
      </div>
        <AboutSection />
        <div id="features-section">
          <FeaturesSection />
        </div>
        <LiveCounter />
        <DownloadSection />
        <div id="team-section">
          <TeamSection />
        </div>
        <div id="timeline-section">
          <TimelineSection />
        </div>
        <div id="contact-section">
          <ContactSection />
        </div>
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
