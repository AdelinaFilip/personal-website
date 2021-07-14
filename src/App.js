import { useRef } from "react";
import "./App.css";
import Snowfall from "react-snowfall";

import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Landing from "./components/Landing";
import Header from "./components/Header";

function App() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="main">
      <Header scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} />
      <div style={{
        position: "fixed", top: 0, bottom: 0, left: 0, right: 0
      }}>
        <Snowfall color="#c9576e" snowflakeCount={250} />
      </div>
      <Landing />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
