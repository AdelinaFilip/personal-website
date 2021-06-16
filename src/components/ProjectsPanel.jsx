import { useState } from "react";
import "./Projects.css";

function ProjectsPanel() {

  const [ session, setSession ] = useState(0);

  return (
    <div className="projects-box">
      <div className="controls">
        <div
          className="controls-text"
          style={session === 0 ? { backgroundColor: "thistle" } : { backgroundColor: "inherit" }}
          onClick={() => setSession(0)}
        >
          University
        </div>
        <div
          className="controls-text"
          style={session === 1 ? { backgroundColor: "thistle" } : { backgroundColor: "inherit" }}
          onClick={() => setSession(1)}
        >
          Others
        </div>
      </div>
      <div className={session === 0 ? "projects-text" : "projects-text2"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
      </div>
    </div>
  );
}

export default ProjectsPanel;