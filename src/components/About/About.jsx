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
            I'm <span>Akshada Mane</span>, a final-year B.Tech Computer Engineering student with a strong foundation in <b>Frontend Development</b> and a deep interest in <b>Artificial Intelligence</b> and <b>Machine Learning</b>. I specialize in technologies like <b>HTML, CSS, JavaScript, React.js, Python</b>, and have hands-on experience building responsive and user-friendly web applications.
          </p>
          <p>
            I'm currently working on a range of <b>AI-driven projects</b>, aiming to address real-world challenges through innovative and efficient solutions. I’m passionate about creating scalable, impactful software that blends technology with purpose.
          </p>

          {/* Download Resume Button */}
          <a 
            href="https://drive.google.com/uc?export=download&id=1yp8xMaa5htLaaKSK7G-oOEhO4r3svpDM" 
            target="_blank" 
            rel="noopener noreferrer" 
            download
          >
            <button className="about-btn">Download Resume</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
