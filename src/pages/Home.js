import React from "react";
import ScrollGlow from "../components/ScrollGlow/ScrollGlow";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import LiveCounter from "../components/LiveCounter/LiveCounter";
import AchievementsSection from "../components/AchievementsSection/AchievementsSection";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import FooterSection from "../components/FooterSection/FooterSection";

const Home = () => {
  return (
    <div>
      <ScrollGlow />
      <main id="backtotop">
        <HeroSection />
        <div id="about-section">
          <AboutSection />
        </div>
        <FeaturesSection />
        <LiveCounter />
        <AchievementsSection />
        <DownloadSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
