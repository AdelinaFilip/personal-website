import { forwardRef } from "react";
import "./Projects.css";

import { projects } from "../data/projects";

import ProjectPanel from "./ProjectPanel";

const Projects = forwardRef((_, ref) => (
  <div ref={ref} className="projects-main">
    {projects.map(item => {
      return <ProjectPanel project={item} key={item.title} />;
    })}
  </div>
));

export default Projects;