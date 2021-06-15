import "./App.css";
import Snowfall from "react-snowfall";

import About from "./components/About";
import Projects from "./components/Projects";
import Landing from "./components/Landing";


function App() {
  return (
    <div className="main">
      <Snowfall color="#c9576e" snowflakeCount={300} style={{ height: "200vh" }} />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
