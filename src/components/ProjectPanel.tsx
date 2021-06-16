import "./Projects.css";
import { ProjectInstance } from "./utils";

function ProjectPanel({ project }: { project: ProjectInstance }) {
  console.log(project);
  return (
    <div className="project-box">
      <div className="project-el">{project.title}</div>
      <div className="project-el">{project.date.toString()}</div>
      <div className="project-el">{project.description}</div>
    </div>
  );
}

export default ProjectPanel;