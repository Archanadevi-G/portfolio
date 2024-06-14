import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { getImageUrl } from "../utils";
import skillsData from "../data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="py-10  relative">
      <div className="mt-8 text-gray-100 text-center">
        <motion.h3
          className="text-4xl font-semibold"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          My <span className="text-cyan-600">Skills</span>
        </motion.h3>
        {/* <p className="text-gray-400 mt-3 text-lg">My knowledge</p> */}
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <div className="flex flex-wrap justify-around ml-[10%] mr-[10%]">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="lg:w-[45%] mb-[20px] border border-slate-400 rounded-xl p-[10px] sm:w-[100%]"
              >
                <motion.h2
                  className="mb-[10px] font-bold text-white"
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  {category.title}
                </motion.h2>
                <ul className="flex flex-wrap gap-[10px]">
                  {category.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center ml-[10px] p-[10px] border border-slate-500 rounded-md gap-[15px]"
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                    >
                      <motion.img
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                        className="w-[30px]"
                      />
                      <motion.span
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                      >
                        {skill.title}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
