import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Tagline */}
        <div className="footer-logo">
          <h2>AkshadaMane</h2>
          <p>Crafting elegant solutions with technology 🚀</p>
        </div>

       

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/AkshadaMane26" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      <a href="https://www.linkedin.com/in/akshada-mane-b93738258" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                      <a href="https://leetcode.com/u/Akshada2004/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
                      <a href="https://www.geeksforgeeks.org/user/akshada290tn/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
                  
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Akshada Mane | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
