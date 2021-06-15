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

  return (
    <div className="main">
      <Header scrollToAbout={scrollToAbout} />
      <Snowfall color="#c9576e" snowflakeCount={300} style={{ height: "200vh" }} />
      <Landing />
      <About ref={aboutRef} />
      <Projects />
    </div>
  );
}

export default App;
