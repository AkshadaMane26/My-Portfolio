import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-image">
          <img src="Profile.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm <span>Akshada Mane</span>, a passionate <b>Frontend Developer</b> skilled in <b>HTML , CSS , JavaScript ,React.js, Python, and Machine Learning</b>.
            I love <b>building elegant, scalable web applications</b> 🚀 and exploring new technologies to create impactful solutions.
          </p>
          <p>
            Currently, I'm working on <b>smart waste management</b> & <b>AI-based projects</b>.
            My goal is to develop applications that **solve real-world problems efficiently**.
          </p>
          <button className="about-btn">Download Resume</button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
