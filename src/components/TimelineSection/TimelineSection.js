import React, { useEffect, useState, useRef } from "react";
import "./TimelineSection.css";
import abstract from "./abstract.svg";
import focus from "./focus.jpg";
import feedback from "./feedback.jpg";
import first1 from "./meet1.jpg";
import first2 from "./meet2.jpg";
import second1 from "./second1.jpg";
import second2 from "./second2.jpg";
import meet1 from "./dialog_meeting1.jpg";
import meet2 from "./dialog_meeting2.jpg";
import meet3 from "./Team1.jpg";
import third1 from "./third1.jpg";
import third2 from "./third2.jpg";
import fourth1 from "./fourth1.jpg";
import fourth2 from "./fourth2.jpg";
import fourth3 from "./fourth3.jpg";
import fifth1 from "./fifth1.jpg";
import fifth2 from "./fifth2.jpg";
import sixth1 from "./sixth1.jpg";
import seventh1 from "./seventh1.jpg";
import seventh2 from "./seventh2.jpg";
import eight1 from "./eight1.jpg";
import eight2 from "./eight2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineEvents = [
  { 
    date: "03-10-2024", 
    title: "Project Kickoff", 
    description: "The journey officially begins! Our team gathers to discuss initial ideas and plan the project roadmap. Brainstorming sessions are key to defining the vision and ensuring everyone is aligned on the project goals.", 
    images: [first1, first2] 
  },
  { 
    date: "28-10-2024", 
    title: "Designing the Blueprint for Success", 
    description: "After initial discussions, it's time to refine the ideas and make decisions on the UI/UX designs. Collaborative sessions focus on crafting the user interface, enhancing user experience, and refining the look and feel of the project.", 
    images: [second1, second2] 
  },
  { 
    date: "06-11-2024", 
    title: "Meetings with the Module Brain", 
    description: "The heart of the development process begins with a series of meetings that define the core architecture of the project. The team lays out the modules and components necessary to bring the vision to life while ensuring smooth integration and scalability.", 
    images: [meet1, meet2, meet3] 
  },
  { 
    date: "18-11-2024", 
    title: "First Launch of the Idea", 
    description: "The first public reveal of the project. Feedback is gathered for continuous improvement, and the excitement of seeing the project take shape drives further innovation.", 
    images: [third1, third2] 
  },
  { 
    date: "20-11-2024", 
    title: "Coursework 1 Completion", 
    description: "At the halfway point, we've finalized the ideas, UI, and all documentation. Now, it's time to shift focus to the implementation phase and bring our plans to life. The groundwork is set, and we’re ready to begin turning concepts into reality.", 
    images: [fourth1, fourth2, fourth3] 
  },
  { 
    date: "02-12-2024", 
    title: "First Implementation of Kyan", 
    description: "The project gets its first major implementation with the Kyan module. Features are optimized, performance is improved, and any issues discovered are addressed promptly. This phase focuses on building a solid foundation for future expansions and refinements.", 
    images: [fifth1, fifth2] 
  },
  { 
    date: "18-01-2025", 
    title: "Launch of the Website Version-1", 
    description: "The project's first full version of the website is launched! After weeks of work, the team is excited to see the project go live to the public. This milestone marks a huge step forward and is celebrated as a success for the team.", 
    images: [sixth1, sixth1] 
  },
  { 
    date: "29-01-2025", 
    title: "Implementation and Integration of the Raspberry PI", 
    description: "The Raspberry Pi is integrated into the project, adding new dimensions and capabilities. This step introduces hardware integration, making the project more dynamic and opening the door for further technical innovation and expansion.", 
    images: [seventh1, seventh2] 
  },  { 
    date: "06-02-2025", 
    title: "Launch of the Main Website", 
    description: "The final website goes live! After weeks of hard work, testing, and iteration, the main version of the website is launched. Bringing all the ideas, designs, and functionality together in one cohesive, user-friendly platform.", 
    images: [eight1, eight2] 
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
    arrows: false, 
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
          style={{ height: `${scrollProgress * 110}%` }}
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
