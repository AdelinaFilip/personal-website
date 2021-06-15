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
          <hr className="divider"/>
          <div className="socials">
            <Mailto email="adelinaf21@gmail.com" subject="Hello!">
              <GrMail />
            </Mailto>
            <GoTo link="https://www.linkedin.com/in/ioana-adelina-filip-2b96a0147/">
              <FaLinkedinIn />
            </GoTo>
            <GoTo link="https://github.com/AdelinaFilip">
              <FaGithub />
            </GoTo>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

const Mailto = ({
  email, subject, body, children
}) => {
  return (
    <a href={
      `mailto:${email}?subject=${encodeURIComponent(subject) || ""}&body=${encodeURIComponent(body) || ""}`
    } className="link">
      {children}
    </a>
  );
};

const GoTo = ({ link, children }) => {
  return (
    <a href={`${link}`} className="link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default App;
