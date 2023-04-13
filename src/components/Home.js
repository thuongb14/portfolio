import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="h-screen">
      <Spline
        className="relative"
        scene="https://prod.spline.design/ym4Q3kHwACO3Kniv/scene.splinecode"
      />
      <div className="w-screen absolute bottom-16 flex justify-center">
        <button className="btn btn-lg mr-24">Download my CV</button>
        <button className="btn btn-lg">My Portfolio</button>
      </div>
    </div>
  );
};

export default Home;
