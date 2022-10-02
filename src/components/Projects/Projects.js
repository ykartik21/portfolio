import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="top-container">
        <h1 className="top-container-heading">Skills</h1>
        <div className="skill-container">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Express</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Node</div>
        </div>
      </div>
      <div className="bottom-container">
        <h1 className="bottom-container-heading">My Projects</h1>
        <div className="project-container">
          <div className="project-item">One</div>
          <div className="project-item">Two</div>
          <div className="project-item">Three</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
