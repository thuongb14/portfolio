import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Wordle from "../assets/wordle-final.png";
import {AiOutlineLink} from 'react-icons/ai'
const Projects = () => {
  return (
    <div>
      <section
        className="mt-10 min-h-[85vh] lg:min-h-[78vh] flex items-center"
        id="home"
      >
        <div className="container mx-auto">
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* Heading */}
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-10 text-[34px] lg:text-[52px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mx-[-20px] mt-[-25px] lg:mt-[-30px] absolute h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] bg-[#8C92E9] bg-opacity-40 rounded-full"></span>
              <span className="text-white mr-4 relative">My Projects</span>
            </motion.h2>
          </div>

          <div className="gap-10 columns-1 lg:columns-2 mx-auto">
            <a href="https://github.com/thuongb14/wordle_ga" target="_blank">
              <div className="relative w-full aspect-video mb-6 group cursor-pointer">
                <img
                  class="hover:opacity-60 hover:scale-105 rounded-[18px] transition-all duration-500 ease-in-out transform"
                  src={Wordle}
                />
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="invisible group-hover:visible absolute top-0 m-5 p-2"
                >
                  <h1 className="font-bold text-[35px]">Wordle</h1>
                  <p className="font-semibold">
                    This is the famous Wordle game project. Made with vanilla HTML, CSS and JS.
                  </p>
                </motion.div>
              </div>
            </a>
            <div className="w-full aspect-square mb-6">
              <img
                class=" transition-all duration-500 ease-in-out transform"
                src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              />
            </div>
            <div className="w-full aspect-square mb-6">
              <img
                class=" transition-all duration-500 ease-in-out transform"
                src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
              />
            </div>
            <div className="w-full aspect-square mb-6">
              <img
                class="hover:scale-150 transition-all duration-500 ease-in-out transform"
                src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
              />
            </div>
            <div className="w-full aspect-square mb-6">
              <img
                class="hover:scale-150 transition-all duration-500 ease-in-out transform"
                src="https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
