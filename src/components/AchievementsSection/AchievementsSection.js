import React from "react";
import { motion } from "framer-motion";
import "./AchievementsSection.css";

const achievements = [
  {
    title: "One of the Highest Mark - Coursework 1",
    description:
      "Recognized as one of the best SDGP project at IIT for the year 24/25",
    year: "2024",
  },
  {
    title: "Pending",
  },
  {
    title: "Pending",
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
