import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar/NavBar";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
