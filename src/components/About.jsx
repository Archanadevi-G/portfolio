import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <motion.h3
          className="text-4xl font-semibold"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          About <span className="text-cyan-600">Me</span>
        </motion.h3>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <motion.p
                className="text-justify leading-7 w-11/12 mx-auto"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                I'm a dedicated Full Stack Developer with a strong focus on
                building modern, responsive, and high-performing web
                applications. With expertise in both frontend and backend
                technologies, I aim to create seamless, user-friendly
                experiences that solve real-world challenges. I enjoy working
                with the latest web technologies, continuously learning, and
                refining my skills to stay ahead in the ever-evolving tech
                landscape. <br />
                Beyond coding, I thrive in collaborative environments where
                innovation and problem-solving drive meaningful projects. I'm
                currently seeking opportunities to contribute to a dynamic team
                that values creativity, efficiency, and growth in the field of
                web development.
              </motion.p>

              <br />
              <br />

              <motion.button
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  href="https://drive.google.com/file/d/1VGOnU_vE9nhiyt2NISKGNsetC-WW_7-A/view"
                  className="btn-primary hover:text-cyan-600 hover:bg-white"
                >
                  View Resume
                  <span className="text-xl animate-bounce">
                    <ion-icon name="arrow-down-outline"></ion-icon>
                  </span>
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
