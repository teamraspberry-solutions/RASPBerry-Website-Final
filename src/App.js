import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import LiveCounter from './components/LiveCounter/LiveCounter';
import AchievementsSection from './components/AchievementsSection/AchievementsSection';
import DownloadSection from './components/DownloadSection/DownloadSection';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FooterSection from './components/FooterSection/FooterSection';

const App = () => {
  return (
    <div>
      <NavBar />
      <main id="backtotop">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <LiveCounter />
        <AchievementsSection />
        <DownloadSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
