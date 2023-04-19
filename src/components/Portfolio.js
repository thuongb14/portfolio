import React from "react";
import About from "./About";
import Education from "./Education";
import Experiences from "./Experiences";
import Header from "./Header";

const Portfolio = () => {
  return (
    <div className="bg-site h-100">
      <Header />
      <About/>
      <Education/>
      <Experiences/>
    </div>
  );
};

export default Portfolio;
