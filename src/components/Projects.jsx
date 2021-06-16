import { forwardRef } from "react";
import "./Projects.css";
import ProjectsPanel from "./ProjectsPanel";



const Projects = forwardRef((_, ref) => (
  <div ref={ref} className="projects-main">
    <ProjectsPanel />
  </div>
));

export default Projects;