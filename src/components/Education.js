import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { data } from "../data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const allSkills = data.skills
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section
      className="mt-20 min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home" ref={ref}
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
            <span className="text-white mr-4 relative">Education & Skills</span>
          </motion.h2>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-y-12 lg:flex-row items-center lg:gap-x-20">
          {/* Edu box */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="education-box text-center lg:text-left bg-[#8C92E9] bg-opacity-10 rounded-2 p-10"
          >
            <div className="flex-1 edu-1">
              <p>2022-2023</p>
              <p className="font-bold">Software Engineer</p>
              <p>General Assembly</p>
            </div>
            <hr className="mt-10 mb-10" />
            <div className="edu-2">
              <p>2018-2021</p>
              <p className="font-bold">Bachelor of Business (Marketing)</p>
              <p>Monash University</p>
            </div>
          </motion.div>
          {/* Skill box */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col gap-y-3 flex-1 w-full p-10"
          >
            {allSkills.map((skill, index) => {
              const {name, percentage} = skill;
              const number = Number(percentage)
              return (
                <div className="mb-1 w-full">
                  <div className="flex flex-row w-full items-center gap-x-5">
                    <p className="text-[35px] lg:text-[50px] font-bold">
                      {inView ? <CountUp start={0} end={number} duration={3}/> : null}%
                    </p>
                    <div className="flex flex-col gap-y-1 w-full m-2">
                      <p className="font-bold">{name}</p>
                      <div className="flex w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className={`bg-accent h-2.5 rounded-full`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
