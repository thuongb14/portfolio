import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Header from "./Header";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="bg-site h-100">
      <Header />
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Portfolio;
