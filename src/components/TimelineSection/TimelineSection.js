import React, { useEffect, useState, useRef } from "react";
import "./TimelineSection.css";
import abstract from "./abstract.svg"; // Import your SVG image

const timelineEvents = [
  { date: "2023-01-15", title: "Project Kickoff", description: "Our journey began with initial brainstorming and planning." },
  { date: "2023-03-10", title: "Design Phase", description: "Finalizing UI/UX designs to ensure a seamless user experience." },
  { date: "2023-06-05", title: "Development Start", description: "Core development begins with robust architecture in place." },
  { date: "2023-09-01", title: "Feature Integration", description: "Incorporating key functionalities and refining workflows." },
  { date: "2023-10-20", title: "Beta Testing", description: "Testing to identify and fix bugs before public release." },
  { date: "2023-12-15", title: "Final Improvements", description: "Enhancing performance and optimizing responsiveness." },
  { date: "2024-01-01", title: "Launch Day", description: "Project goes live, marking a significant milestone!" },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = scrollTop / docHeight;

      setScrollProgress(scrollPosition);

      const timeline = timelineRef.current;
      if (!timeline) return;

      const scrollPositionCenter = window.scrollY + window.innerHeight * 0.5;
      let closestIndex = 0;
      let minDistance = Infinity;

      document.querySelectorAll(".timeline-event").forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        const distance = Math.abs(rect.top + window.scrollY - scrollPositionCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container" style={{ backgroundImage: `url(${abstract})` }}>
      <h1 className="timeline-title">Project Timeline</h1>
      <div className="timeline" ref={timelineRef}>
        {/* Dimmed Background Line */}
        <div className="timeline-line-background"></div>

        {/* Glowing Loader Line */}
        <div
          className="timeline-line-loader"
          style={{ height: `${scrollProgress * 140}%` }} // Loader height increases with scroll
        ></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"} ${index <= activeIndex ? "visible" : ""}`}
          >
            <div className="timeline-content fade-in">
              <p className="timeline-date">{event.date}</p>
              <h3 className="timeline-heading">{event.title}</h3>
              <p className="timeline-text">{event.description}</p>
            </div>
            <div className="timeline-dot pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
