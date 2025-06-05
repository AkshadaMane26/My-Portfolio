import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "afc015dd-d3c6-441f-b699-83ea6e240ab1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-image">
        <img src='contact.png' alt="Contact Visual" />
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          <span className="result-message">{result}</span>
        </form>
      </div>
    </div>
  );
}
