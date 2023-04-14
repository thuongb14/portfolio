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
      <div className="w-screen sm:bottom-10 absolute bottom-16 flex justify-center">
        <Link to="/portfolio" className="btn btn-lg pt-4">
          Get to know me more! &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Home;
