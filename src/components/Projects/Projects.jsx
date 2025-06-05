import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const categories = ["All", "Web Development", "AI", "ML","Python"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
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
              <h3 className="project-title">{project.title}</h3>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                  <FaGithub /> GitHub
                </a>
                <button
                  className="project-btn details-btn"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
