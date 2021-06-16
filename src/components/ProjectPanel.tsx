import "./Projects.css";
import { ProjectInstance } from "./utils";

function ProjectPanel({ project }: { project: ProjectInstance }) {
  console.log(project);
  return (
    <div className="project-box">
      <div className="project-top">
        <h2 className="project-el-title">{project.title}</h2>
        <h3 className="project-date">{project.date}</h3>
      </div>
      <div className="project-description">{project.description}</div>
    </div>
  );
}

export default ProjectPanel;