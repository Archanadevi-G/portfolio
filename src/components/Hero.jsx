import React, { useEffect, useRef } from "react";
import photo from "../../assets/images/img.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Hero = () => {
  const social_media = [
    {
      name: "LinkedIn",
      icon: "logo-linkedin",
      url: "https://www.linkedin.com/in/g-archanadevi/",
    },
    {
      name: "GitHub",
      icon: "logo-github",
      url: "https://github.com/Archanadevi-G",
    },
    { name: "Mail", icon: "mail", url: "mailto:archanadevig10@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1 flex items-center justify-center h-full  "
      >
        <img
          src={photo}
          alt=""
          className="md:w-[40%] sm:w-[30%] h-full object-cover max-w-[50%] border-4 border-cyan-300 rounded-full p-1  glow-effect mt-16 mb-10 "
        />
      </motion.div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold"
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Archanadevi</span>
          </motion.h1>
          <motion.h4
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-200"
          >
            I'm a Passionate{" "}
            <span className="text-cyan-400">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "FullStack Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </motion.h4>
          {/* <h5 className="md:text-xl text-base md-leading-normal mt-4 font-semibold text-gray-500">
            Transforming Ideas into Web Reality
          </h5> */}

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"
          >
            {social_media?.map((item) => (
              <a
                key={item.icon}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center bg-transparent text-sky-600 rounded-full border border-sky-600 transition-all duration-500 ease-in hover:bg-sky-600 hover:text-slate-800  hover:ring-2 hover:ring-sky-600"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </motion.div>
          <button>
            <motion.a
              href="#contact"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn-primary mt-8 shadow-custom hover:text-cyan-600 hover:bg-white hover:drop-shadow-custom"
            >
              Contact Me
            </motion.a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
