import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-screen">
      <Spline scene="https://prod.spline.design/ym4Q3kHwACO3Kniv/scene.splinecode" />
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
    </div>
  );
};

export default Home;
