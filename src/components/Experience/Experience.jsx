import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa"; 
import "./Experience.css";

const education = [
  {
    id: 0,
    school: "BRACTS Vishwakarma Institute of Information Technology, Pune",
    date: "2022 - 2026",
    grade: "CGPA: 8.5",
    desc: "Pursuing a Bachelor's degree in Computer Engineering. Gaining hands-on experience in AI/ML, web development, and data structures.",
    degree: "Bachelor of Technology - BTech, Computer Engineering",
  },
  {
    id: 1,
    school: "R.R. Shinde Junior College, Pune",
    date: "2020 - 2022",
    grade: "Percentage: 71%",
desc: "Completed Higher Secondary Education with a focus on Science and Mathematics, along with Computer Science as an optional subject to strengthen my technical foundation.",
    degree: "Higher Secondary Certificate (HSC), Science",
  },
  {
    id: 2,
    school: "New English School, Pune",
    date: "Before 2020",
    grade: "Percentage: 92%",
desc: "Completed Secondary School Certificate (SSC) with a solid academic foundation, excelling in Science and Mathematics.",
    degree: "Secondary School Certificate (SSC)",
  },
];

const experiences = [
  {
    id: 0,
    role: "Artificial Intelligence Project Intern",
    company: "Infosys Springboard",
    date: "Oct 2024 - Dec 2024",
    desc: "Collaborated remotely on developing an AI-powered student engagement tracker that enhanced learning experiences by analyzing facial cues and emotions using AI techniques, significantly improving user interaction and session effectiveness.",
    link: "https://drive.google.com/file/d/1bmxFc2tvJZzVa_LHDR3xXognSAtFCpr0/view",
  },
  {
    id: 1,
    role: "Web Developer",
    company: "L&D INFOTECH PVT. LTD , Pune",
    date: "Jan 2025 - Mar 2025",
    desc: "Actively contributing to the development of a PG accommodation website, with a strong focus on enhancing front-end design, user interface, and overall user experience for improved accessibility and engagement.",
    link: "https://drive.google.com/file/d/1xB2Wdp0jhmndMCsuX2uhfmvqNKiduHpI/view",
  },
];

const EducationExperience = () => {
  const [eduIndex, setEduIndex] = useState(0);
  const [expIndex, setExpIndex] = useState(0);

  // Change education every 4 seconds
  useEffect(() => {
    const eduTimer = setInterval(() => {
      setEduIndex((prev) => (prev + 1) % education.length);
    }, 4000); 
    return () => clearInterval(eduTimer);
  }, []);

  // Change experience every 5 seconds
  useEffect(() => {
    const expTimer = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % experiences.length);
    }, 4000); 
    return () => clearInterval(expTimer);
  }, []);

  const currentEducation = education[eduIndex];
  const currentExperience = experiences[expIndex];

  return (
    <div className="education-experience-container" id="education">
      <div className="education-section">
        <h2>Education</h2>
        <div className="timeline-container">
          <div className="timeline-item active">
            <div className="timeline-dot"></div> 
            <div className="education-card">
              <p className="education-date">{currentEducation.date}</p>
              <div className="education-header">
                <h3>
                  {currentEducation.degree}{" "}
                  {currentEducation.link && (
                    <a
                      href={currentEducation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-icon"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </h3>
              </div>
              <p className="education-desc">{currentEducation.desc}</p>
              <p className="education-grade">{currentEducation.grade}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-section" id="experience">
        <h2>Experience</h2>
        <div className="timeline-container">
          <div className="timeline-item active">
            <div className="timeline-dot"></div> 
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">
                  {currentExperience.role}{" "}
                  <a
                    href={currentExperience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <span className="experience-date">
                    <FaCalendarAlt className="icon" /> {currentExperience.date}
                  </span>
                </h3>
              </div>
              <div className="experience-subheader">
                <p className="experience-company">{currentExperience.company}</p>
                <span className="experience-location">
                  <FaMapMarkerAlt className="icon" /> Remote
                </span>
              </div>
              <p className="experience-desc">{currentExperience.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
