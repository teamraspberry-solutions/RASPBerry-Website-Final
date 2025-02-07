import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      try {
        const response = await fetch("https://formspree.io/f/manngajp", {
          method: "POST",
          body: formDataToSend,
          headers: {
            "Accept": "application/json",
          },
        });

        if (response.ok) {
          setFormStatus("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setFormStatus("Something went wrong. Please try again.");
        }
      } catch (error) {
        setFormStatus("There was an error. Please try again.");
      }
    } else {
      setFormStatus("Please fill out all fields!");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
          <div className="contact-methods">
            <div className="contact-item">
              <p>(+94) 77 378 4996</p>
              <p>(+94) 77 220 5158</p>
              <p>(+94) 77 280 5262</p>
            </div>
            <div className="contact-item">
              <p>teamraspberry6@gmail.com</p>
            </div>
            <div className="contact-item">
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {formStatus && <div className="form-status">{formStatus}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
