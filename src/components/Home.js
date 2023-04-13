import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen">
      <Spline
        className="relative"
        scene="https://prod.spline.design/ym4Q3kHwACO3Kniv/scene.splinecode"
      />
      <div className="w-screen absolute bottom-16 flex justify-center">
        <Link target="_blank"
          to="https://www.linkedin.com/in/lizzy-truong/"
          className="btn btn-lg pt-4 mr-24"
        >
          Download my CV
        </Link>
        <Link to="/about" className="btn btn-lg pt-4">
          Get to know me more! &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Home;
