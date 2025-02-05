import React, { useEffect, useState, useRef } from "react";
import "./TimelineSection.css";
import abstract from "./abstract.svg";
import focus from "./focus.jpg";
import team from "./Team1.jpg";
import feedback from "./feedback.jpg";
import meet1 from "./dialog_meeting1.jpg";
import meet2 from "./dialog_meeting2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineEvents = [
  { 
    date: "2023-01-15", 
    title: "Project Kickoff", 
    description: "Our journey began with initial brainstorming and planning.", 
    images: [focus, team] 
  },
  { 
    date: "2023-03-10", 
    title: "Design Phase", 
    description: "Finalizing UI/UX designs to ensure a seamless user experience.", 
    images: [meet1, meet2] 
  },
  { 
    date: "2023-06-05", 
    title: "Development Start", 
    description: "Core development begins with robust architecture in place.", 
    images: [feedback, focus] 
  },
  { 
    date: "2023-09-01", 
    title: "Feature Integration", 
    description: "Incorporating key functionalities and refining workflows.", 
    images: [focus, focus] 
  },
  { 
    date: "2023-10-20", 
    title: "Beta Testing", 
    description: "Testing to identify and fix bugs before public release.", 
    images: [focus, focus] 
  },
  { 
    date: "2023-12-15", 
    title: "Final Improvements", 
    description: "Enhancing performance and optimizing responsiveness.", 
    images: [focus, focus] 
  },
  { 
    date: "2024-01-01", 
    title: "Launch Day", 
    description: "Project goes live, marking a significant milestone!", 
    images: [focus, focus] 
  },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);

      const scrollCenter = window.scrollY + window.innerHeight * 0.5;
      let closestIndex = 0;
      let minDistance = Infinity;
      document.querySelectorAll(".timeline-event").forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        const distance = Math.abs(rect.top + window.scrollY - scrollCenter);
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

  const sliderSettings = {
    dots: true,
    arrows: false, // arrows removed
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="timeline-container" style={{ backgroundImage: `url(${abstract})` }}>
      <h1 className="timeline-title">Project Timeline</h1>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line-background"></div>
        <div 
          className="timeline-line-loader" 
          style={{ height: `${scrollProgress * 140}%` }}
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
              <div className="gallery-slider">
                <Slider {...sliderSettings}>
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Slide ${i}`}
                      className="slider-image"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className="timeline-dot pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
