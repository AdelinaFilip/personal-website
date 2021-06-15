import "./App.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="main">
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
        <div className="card">
          <h2 className="title">Hi, I'm Adelina!</h2>
          <div className="socials">
            <GrMail />
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
