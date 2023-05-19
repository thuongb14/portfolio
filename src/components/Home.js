import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const handleSceneLoad = () => {
    setIsLoaded(false);
  };
  return (
    <div className="h-screen relative">
      {isLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/ym4Q3kHwACO3Kniv/scene.splinecode"
        onLoad={handleSceneLoad}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      {!isLoaded && (
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="w-screen sm:bottom-10 absolute bottom-16 flex justify-center"
        >
          <Link to="/portfolio" className="btn btn-sm btn-secondary pt-4">
            Get to know me more! &#8594;
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
