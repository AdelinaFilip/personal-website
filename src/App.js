import { useRef } from "react";
import "./App.css";
import Snowfall from "react-snowfall";

import About from "./components/About";
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
      <Header scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects}/>
      <Snowfall color="#c9576e" snowflakeCount={300} style={{ height: "220vh" }} />
      <Landing />
      <About ref={aboutRef} />
      <Projects ref={projectsRef}/>
    </div>
  );
}

export default App;
