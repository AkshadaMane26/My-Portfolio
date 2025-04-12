import React, { useState } from 'react';
import projectsData from '../../data/projects.json';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const categories = ["All", "Web Development", "Machine Learning", "AI", "Data Analysis"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-section">
  <div className="projects-container">
  <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="tech-stack">
              <strong>{project.techStack.join(', ')}</strong>
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noreferrer" title="Live Demo">
                <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href={project.details} target="_blank" rel="noreferrer" title="More Details">
                <FaInfoCircle />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>  </div>
</section>
    
  );
};

export default Projects;