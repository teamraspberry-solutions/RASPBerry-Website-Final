import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Conversational Intelligence",
      description: "Engage in humanly conversations. Kyan understands tone and context making interactions seamless.",
    },
    {
      title: "Adaptive Learning",
      description: "Personalized insights that evolve with user behavior, ensuring an optimized learning experience over time.",
    },
    {
      title: "Cognitive Focus Tracking",
      description: "AI-powered attention monitoring keeps you engaged, recognizing distractions and providing focus-enhancing prompts.",
    },
    {
      title: "Sentiment Analysis",
      description: "Detects emotions in real-time and tailors responses accordingly, creating a more empathetic and meaningful experience.",
    },
    {
      title: "Deep Personalization",
      description: "Learns your preferences, habits, and interests, curating recommendations that align perfectly with your needs.",
    },
    {
      title: "Real-Time Decision Assistance",
      description: "Processes vast amounts of data instantly, providing actionable insights for smarter, faster decision-making.",
    },
  ];

  return (
    <section className="features">
      <h1 className="features-title">Why Choose Kyan?</h1>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
