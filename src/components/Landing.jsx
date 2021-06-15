import "../App.css";
import Tilt from "react-parallax-tilt";

import SocialPanel from "./SocialPanel";

function Landing() {
  return (
    <div className="landing">
      <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16}>
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

export default Landing;