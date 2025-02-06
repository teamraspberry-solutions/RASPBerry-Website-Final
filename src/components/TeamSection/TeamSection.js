import React, { useState, useEffect } from "react";
import "./TeamSection.css";
import teamMembers from "./TeamData";
import team from "./images/team.svg";
import linkedin from "./images/linkedin.png";
import github from "./images/github1.png";

const TeamPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      className="team-container"
      style={{
        backgroundImage: `url(${team})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="team-title">Meet Our Amazing Team</h1>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card" onClick={() => openModal(member)}>
            <div className="team-card-img">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="team-footer-glow"></div>

      {modalOpen && (
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <div className="modal-layout">
              <img className="modal-img" src={selectedMember.image} alt={selectedMember.name} />
              <div className="modal-info">
                <h2 className="modal-name">{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                <p className="modal-description">{selectedMember.description}</p>
                <div className="modal-socials">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                  </a>
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="GitHub" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
