import "./App.css";
import Tilt from "react-parallax-tilt";

import SocialPanel from "./SocialPanel";

function App() {

  return (
    <div className="main">
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className="card">
          <h2 className="title">Hi, I'm Adelina!</h2>
          <hr className="divider" />
          <SocialPanel />
        </div>
      </Tilt>
    </div>
  );
}

export default App;
