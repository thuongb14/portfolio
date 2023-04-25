import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
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
              <span className="text-white mr-4 relative">Contact Me</span>
            </motion.h2>
          </div>
          <div className="py-16 flex flex-col lg:gap-20 lg:flex-row">
            {/* text */}
            <div>
              <h4 className="text-center lg:text-left text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-center lg:text-left text-[60px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
            {/* form */}
            <form className="mx-6 lg:mx-0 flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start" method="POST" action="">
              <input
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
              />
              <textarea
                className="resize-none mb-12 bg-transparent border-b py-12 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg active">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
