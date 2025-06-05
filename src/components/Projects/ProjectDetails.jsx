import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Project Not Found</div>;
  }

  // Correct image path (BASE_URL only for public folder images)
  const imagePath = `${import.meta.env.BASE_URL}${project.image}`;

  const handleBack = () => {
    navigate("/", { replace: true }); // Just "/" because basename is already set
  };

  return (
    <>
      <div className="project-details">
        <img src={imagePath} alt={project.title} className="details-image" />

        <h1>{project.title}</h1>
        <p><strong><u>Category</u>:</strong>  {project.category}</p>
        <p><strong><u>Tech Stack</u>:</strong> {project.techStack.join(', ')}</p>
        <p><strong><u>Description</u>:</strong> {project.details}</p>

        <a href={project.github} target="_blank" rel="noreferrer" className="details-link">
          View on GitHub
        </a>

        <button onClick={handleBack} className='back-link'> ← Back to Projects</button>
      </div>
    </>
  );
};

export default ProjectDetails;
