import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const roles = ["BTech Computer Engineering Student","Full Stack Web Developer", "AI/ML Enthusiast", "Python Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <video autoPlay loop muted className="bg-video">
        <source src="abc.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I am <span className="highlight">Akshada Mane</span></h1>
          <h2>I am a <span className="changing-text">{roles[index]}</span></h2>
          <p>
          I am a motivated and versatile professional, skilled in full-stack web development, machine learning engineering, and Python development. With a passion for learning and problem-solving, I am committed to delivering high-quality solutions. With a positive attitude and a growth mindset, I am ready to take on new challenges and make a meaningful impact.
          </p>
          <div className='btn-container'>
          <a href="https://drive.google.com/file/d/1yp8xMaa5htLaaKSK7G-oOEhO4r3svpDM/view?usp=sharing" className="btn">Check Resume</a>
          <a href="#contact" className="btn">Contact Me</a>
          </div>
    
          
        </div>
        <div className="hero-image">
          <img src="f.png" alt="Akshada Mane" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
