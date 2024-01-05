import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section id="projects" className="section  mt-[100px] py-5">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        key="container"
        className="py-12 w-[80%] mx-auto grid grid-cols-1  lg:grid-cols-2  gap-6"
      >
        <div key="brief" className=" h-[300px] px-4 py-4 rounded-xl">
          <h2 className="h2 leading-tight text-white">
            My Recent <br />
            Projects
          </h2>
          <p className="max-w-sm mb-16 text-white/85">
            "Explore our diverse portfolio of collaborative projects, ranging
            from a robust full-stack MERN application to a dynamic React-Redux
            frontend, and an innovative React-Redux TypeScript project. Each
            project reflects our commitment to teamwork and excellence in web
            development."
          </p>
        </div>
        <div key="p1" className="  h-[300px] sm:h-[100%] rounded-xl">
          <img
            className="w-[100%] h-[100%] rounded-xl"
            src="https://github.com/PragatiS11/nippy-flavor-9468/assets/121331649/6501f98f-e8e4-438d-9ba8-58d44ea991b6"
            alt=""
          />
        </div>
        <div key="p1" className="  h-[300px] sm:h-[100%] rounded-xl">
          <img
            className="w-[100%] h-[100%]  rounded-xl"
            src="https://i.postimg.cc/hPz2yQTD/Home.jpg)](https://postimg.cc/XpWKXJsm"
          />
        </div>

        <div key="p1" className="  h-[300px] sm:h-[100%] rounded-xl">
          <img
            className="w-[100%] h-[100%] rounded-xl"
            src="https://camo.githubusercontent.com/1ecb68d4031c103ead37e3f9114d1834bc1a8f31064c44aac723103f8d393840/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6b787078317a757773696734686c306967706b762e706e67"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
