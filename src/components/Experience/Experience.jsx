import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa"; 
import "./Experience.css";

const education = [
  {
    id: 0,
    school: "BRACTS Vishwakarma Institute of Information Technology, Pune",
    date: "2022 - 2026",
    grade: "CGPA: 8.33",
    desc: "Pursuing a Bachelor's degree in Computer Engineering. Gaining hands-on experience in AI/ML, web development, and data structures.",
    degree: "Bachelor of Technology - BTech, Computer Engineering",
    link: "https://example.com/btech", // Replace with actual link
  },
  {
    id: 1,
    school: "R.R. Shinde Junior College, Pune",
    date: "2020 - 2022",
    grade: "Percentage: 71%",
    desc: "Completed HSC with a focus on Science and Mathematics.",
    degree: "Higher Secondary Certificate (HSC), Science",
    link: "https://example.com/hsc", // Replace with actual link
  },
  {
    id: 2,
    school: "New English School, Pune",
    date: "Before 2020",
    grade: "Percentage: 92%",
    desc: "Completed SSC with a strong foundation in Science and Mathematics.",
    degree: "Secondary School Certificate (SSC)",
    link: "https://example.com/ssc", // Replace with actual link
  },
];

const experiences = [
  {
    id: 0,
    role: "Project Intern",
    company: "Infosys Springboard",
    date: "Oct 2024 - Dec 2024",
    desc: "Worked remotely on an AI-based engagement tracker for young learners, improving user interaction using machine learning techniques.",
    link: "https://example.com/infosys", // Replace with actual link
  },
  {
    id: 3,
    role: "Developer",
    company: "L&D, Pune",
    date: "Jan 2025 - Mar 2025",
    desc: "Contributing to a PG website development project, focusing on front-end and user experience improvements.",
    link: "https://example.com/landd", // Replace with actual link
  },
];

const EducationExperience = () => {
  return (
    <div className="education-experience-container">
      <div className="education-section">
        <h2>Education</h2>
        <div className="timeline-container">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-dot"></div> 
              <div className="education-card">
                <p className="education-date">{edu.date}</p>
                <div className="education-header">
                  <h3>{edu.degree} <a href={edu.link} target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <FaExternalLinkAlt />
                  </a></h3>
                  
                </div>
                <p className="education-desc">{edu.desc}</p>
                <p className="education-grade">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        <div className="timeline-container">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div> 
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role} <a href={exp.link} target="_blank" rel="noopener noreferrer" className="nav-icon">
                    <FaExternalLinkAlt />
                  </a>
                  <span className="experience-date">
                  <FaCalendarAlt className="icon" /> {exp.date}
                </span>
                </h3>
                  
                </div>
               
                <div className="experience-subheader">
                  <p className="experience-company">{exp.company}</p>
                  <span className="experience-location">
                    <FaMapMarkerAlt className="icon" /> Remote
                  </span>
                </div>
                <p className="experience-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
