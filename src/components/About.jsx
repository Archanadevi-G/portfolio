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
                I'm a Web Developer with a strong foundation in HTML, CSS,
                JavaScript, Tailwind CSS, and ReactJS. I'm passionate about
                using these skills to develop innovative web applications that
                are user-friendly. I'm always eager to learn more about web
                development and new technologies. I enjoy the challenge of
                solving real-world problems. Currently, I'm seeking
                opportunities to join a team that values innovation and shares
                my enthusiasm for technology.
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
                  href="https://drive.google.com/file/d/1J-l0YUHEuTddTG3YglQlM9zW9036axfG/view"
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
