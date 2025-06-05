import React, { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";  // GeeksforGeeks icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">AkshadaMane</h1>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li className="social-icons-mobile">
            <a href="https://github.com/AkshadaMane26" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/akshada-mane-b93738258" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/Akshada2004/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="https://www.geeksforgeeks.org/user/akshada290tn/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
          </li>
        </ul>
        
        {/* Social Icons for Larger Screens */}
        <div className="social-icons">
          <a href="https://github.com/AkshadaMane26" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/akshada-mane-b93738258" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/Akshada2004/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="https://www.geeksforgeeks.org/user/akshada290tn/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
