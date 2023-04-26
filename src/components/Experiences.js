import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { data } from "../data";

const Experiences = () => {
  const experiences =  data.experiences;
  return (
    <section
      className="mt-10 min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex-1 text-center font-secondary lg:text-left">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-10 text-[34px] lg:text-[52px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mx-[-20px] mt-[-25px] lg:mt-[-30px] absolute h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] bg-[#8C92E9] bg-opacity-40 rounded-full"></span>
            <span className="text-white mr-4 relative">Experiences</span>
          </motion.h2>
        </div>
        <div className="flex container mx-auto flex-col gap-y-12">
          {/* Box */}
          {experiences.map((experience, index) => {
            console.log(experiences);
            const { role, company, time, type, description } = experience;
            return (
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="mx-10 lg:mx-0 bg-[#8C92E9] flex bg-opacity-10 px-10 py-8"
              >
                <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-x-12 items-center text-center lg:text-left">
                  <div className="lg:w-[25%] pr-5 lg:border-r-[1px]">
                    <p>
                      <strong>{role}</strong>
                    </p>
                    <p>
                      <em>{company}</em>
                    </p>
                    <p>{time}</p>
                    <p className="font-semibold mt-2 py-1 px-3 lg:w-fit bg-accent rounded-[8px]">
                      {type}
                    </p>
                  </div>
                  <div className="lg:w-[75%] text-left">
                    <ul>
                      {description.map((dot, index) => {
                        return <li>▪ {dot}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Boxes */}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
