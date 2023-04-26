import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const alert = useRef();
  const [active, setActive] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wwv3hqn",
        "template_by0c4hr",
        form.current,
        "DrhBUpykzkdbxPp2o"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setActive(true)
          setTimeout(() => {
            setActive(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section
        id="contact"
        className="mt-10 min-h-[85vh] lg:min-h-[78vh] flex items-center"
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
              <div className="justify-center lg:justify-start text-[22px] flex flex-row items-center mb-2">
                <FiMail className="w-[40px]" />
                thuongb14@gmail.com
              </div>
              <div className="justify-center lg:justify-start mb-8 text-[22px] flex flex-row items-center">
                <FiPhone className="w-[40px]" />
                0401 491 750
              </div>
            </div>
            {/* form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mx-6 lg:mx-0 flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              <input
                name="user_name"
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />
              <input
                name="user_email"
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
              />
              <textarea
                name="message"
                className="resize-none mb-12 bg-transparent border-b py-12 w-full outline-none placeholder:text-white focus:border-accent transition-all"
                placeholder="Your message"
              ></textarea>
              <button type="submit" value="Send" className="btn btn-lg active">
                Send message
              </button>
              <em>
                <p
                  ref={alert}
                  className={`${active ? "" : "hidden"} text-gradient`}
                >
                  *Email has been sent
                </p>
              </em>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
