import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

const AppRoutes = () => {
  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      const sectionElement = sectionsRef.current[section];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Router>
      <NavBar scrollToSection={scrollToSection} />
      <Home sectionsRef={sectionsRef} />
    </Router>
  );
};

export default AppRoutes;
