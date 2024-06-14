import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { getImageUrl } from "../utils";
import projectData from "../data/project.json";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <motion.h3
          className="text-4xl font-semibold"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          My <span className="text-cyan-600">Projects</span>
        </motion.h3>
      </div>
      <br />
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative ">
        <div className=" w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              // el: ".swiper-pagination",
            }}
            modules={[Pagination, Autoplay]}
          >
            {projectData.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-6 border border-gray-300 rounded-xl ">
                  <img
                    src={getImageUrl(project_info.img)}
                    alt={project_info.name}
                    className="rounded-lg  w-[400px] h-[250px] md:w-[100%] "
                  />
                  <h3 className="text-xl my-4 flex items-center justify-center">
                    {project_info.name}
                  </h3>
                  {/* {(Array.isArray(project_info.techStack)
                    ? project_info.techStack
                    : project_info.techStack.split(" ")
                  ).map((tech, index) => (
                    <h4
                      key={index}
                      className="px-2 py-1 inline-block rounded border border-cyan-600 m-1 mb-5 items-center justify-center"
                    >
                      {tech}
                    </h4>
                  ))} */}
                  <div className="flex gap-3 items-center justify-center">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 cursor-pointer inline-block rounded hover:bg-cyan-600 hover:text-white"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 cursor-pointerinline-block rounded hover:bg-cyan-600 hover:text-white"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
