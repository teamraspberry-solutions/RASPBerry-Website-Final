import React, { useState, useEffect } from "react";
import "./LiveCounter.css";

const LiveCounter = () => {
  const stats = [
    { label: "Active Users", start: 0, end: 1 },
    { label: "Insights", start: 0, end: 500, suffix: "+" },
    { label: "Successful Predictions", start: 50, end: 97, suffix: "%" },
    { label: "Customer Satisfaction", start: 80, end: 98, suffix: "%" },
  ];

  const [counters, setCounters] = useState(stats.map((stat) => stat.start));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, i) =>
          count < stats[i].end
            ? count + Math.ceil((stats[i].end - stats[i].start) / 100)
            : stats[i].end
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="live-counter">
      <h1 className="counter-title">Kyan in Numbers</h1>
      <div className="counter-container">
        {stats.map((stat, index) => (
          <div key={index} className="counter-circle">
            <svg width="160" height="160">
              <circle cx="80" cy="80" r="70" className="circle-background" />
              <circle
                cx="80"
                cy="80"
                r="70"
                className="circle-progress"
                style={{
                    strokeDasharray: 440, // Half-circle max length
                    strokeDashoffset: 440 - (400 * counters[index]) / stats[index].end,
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                  }}
              />
            </svg>
            <div className="counter-content">
              <h2>{counters[index]}{stat.suffix || ""}</h2>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveCounter;
