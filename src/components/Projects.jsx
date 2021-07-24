import { forwardRef } from "react";
import "./Projects.css";

import { projects } from "../data/projects";

import ProjectPanel from "./ProjectPanel";

const Projects = forwardRef((_, ref) => (
  <div ref={ref} className="projects-main">
    <div className="projects-section-title">
      <h1 className="p-title">Projects</h1>
    </div>
    <div className="projects-list">
      {projects.map(item => {
        return <ProjectPanel project={item} key={item.title} />;
      })}
    </div>
  </div>
));

Projects.displayName = "Projects";

export default Projects;