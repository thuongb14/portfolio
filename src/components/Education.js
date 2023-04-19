import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Education = () => {
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
            <span className="text-white mr-4 relative">Education & Skills</span>
          </motion.h2>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-20">
          {/* Edu box */}
          <motion.div variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className="education-box bg-white bg-opacity-30 p-10">
            <div className="flex-1 edu-1">edu 1</div>
            <div className="edu-2">edu 2</div>
          </motion.div>
          {/* Skill box */}
          <div className="lg:flex flex-1 skill-box">Skills</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
