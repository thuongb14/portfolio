import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { data } from "../data";

const Projects = () => {
  const projects = data.projects;

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
          <div className="mx-6 lg:mx-0 gap-10 columns-1 lg:columns-2 mx-auto">
            {projects.map((project, index) => {
              const { link, img, title, description } = project;

              return (
                <a href={link} target="_blank">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-[2rem] relative w-full aspect-video mb-6 group cursor-pointer"
                  >
                    <img
                      class="hover:opacity-60 hover:scale-105 rounded-[18px]  transition-all duration-500 ease-in-out transform"
                      src={img}
                    />
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.9 }}
                      className="invisible group-hover:visible absolute top-0 m-5 p-2"
                    >
                      <h1 className="font-bold text-[35px]">{title}</h1>
                      <p className="mt-2 font-semibold">{description}</p>
                    </motion.div>
                  </motion.div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
