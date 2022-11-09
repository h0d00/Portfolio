import React, { useState, useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import Skill from "./components/Skill";
import "./App.css";

function App() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header position={position} />
      <Main />
      <About position={position} />
      <Skill position={position} />
      <Project position={position} />
    </div>
  );
}

export default App;
