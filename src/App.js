import "./App.css";
import Tilt from "react-parallax-tilt";
import Snowfall from "react-snowfall";

import SocialPanel from "./SocialPanel";

function App() {

  return (
    <div className="main">
      <Snowfall color="#c9576e" />
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className="card">
          <div className="card-contents">
            <h1 className="title">Hi, I'm <span> &nbsp;Adelina!</span></h1>
            <hr className="divider" />
            <SocialPanel />
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
