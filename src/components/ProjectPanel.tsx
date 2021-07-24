import FadeInSection from "../utils/FadeIn";
import "./Projects.css";
import { ProjectInstance } from "./utils";

function ProjectPanel({ project }: { project: ProjectInstance }) {
  return (
    <FadeInSection>
      <div className="project-box">
        <div className="project-top">
          <h2 className="project-el-title">{project.title}</h2>
          <h3 className="project-date">{project.date}</h3>
        </div>
        <div className="project-description">
          <ul>
            {
              project.description.map(
                item => <li key={item.length}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}

export default ProjectPanel;