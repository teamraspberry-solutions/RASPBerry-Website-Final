import React from "react";
import { motion } from "framer-motion";
import "./AchievementsSection.css";

const achievements = [
  {
    title: "1st Place - AI Innovation Challenge",
    description:
      "Team RASPBerry secured first place in the prestigious AI Innovation Challenge, competing against 50+ teams worldwide.",
    year: "2023",
  },
  {
    title: "Best Research Paper Award",
    description:
      "Published an award-winning paper on AI-driven automation in IEEE, recognized as a top research contribution in 2022.",
    year: "2022",
  },
  {
    title: "Top 3 Finalist - Global Hackathon",
    description:
      "Developed an AI-powered chatbot for mental health support, earning a top 3 finalist spot in a global hackathon.",
    year: "2024",
  },
  {
    title: "Community Impact Award",
    description:
      "Our AI project positively impacted over 10,000 users, leading to recognition for significant contributions to society.",
    year: "2023",
  },
];

const AchievementsSection = () => {
  return (
    <section className="achievements-section">
      <motion.h1
        className="achievements-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Achievements of Team RASPBerry
      </motion.h1>
      <motion.p
        className="achievements-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Project Kyan has been recognized worldwide for its contributions in AI and innovation. Here are some of our proudest achievements:
      </motion.p>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
            <span className="achievement-year">{achievement.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
