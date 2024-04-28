// // ProjectItem.js
import React from "react";

function ProjectItem({ project }) {
  // Ensure project is defined before accessing its properties
  const id = project ? project.id : null;
  const name = project && project.name ? project.name : "Default Project Name";
  const about = project && project.about ? project.about : "Default Project Description";
  const technologies = project && project.technologies ? project.technologies : [];

  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;