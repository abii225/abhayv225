import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <section id="projects" className=" w-[80%] mt-[100px] py-5 mx-auto">
      <div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        key="container"
        className="py-12  mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          key="brief"
          className="  px-4 py-4 rounded-xl"
        >
          <h2 className="h2 leading-tight text-white">
            My Recent <br />
            Projects
          </h2>
          <p className="max-w-sm leading-0 text-white/85 text-[15px]">
            "Explore our diverse portfolio of collaborative projects, ranging
            from a robust full-stack MERN application to a dynamic React-Redux
            frontend, and an innovative React-Redux TypeScript project. Each
            project reflects our commitment to teamwork and excellence in web
            development."
          </p>
        </motion.div>
        <div
          key="p1"
          className="relative flex justify-center items-center  text-icon  h-[300px]   rounded-xl overflow-hidden"
        >
          <img
            className="w-[100%] h-[100%] rounded-xl hover:scale-95 focus:100 transition-transform"
            src="https://github.com/PragatiS11/nippy-flavor-9468/assets/121331649/6501f98f-e8e4-438d-9ba8-58d44ea991b6"
            alt=""
          />
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute block flex justify-between  w-[30%] h-[30%]"
          >
            <a
              href="https://becharity.vercel.app/"
              className=" rounded-full p-3 "
            >
              <GrDeploy style={{ width: "50px", height: "100%" }} />
            </a>
            <a
              href="https://github.com/abii225/Be-Charity?tab=readme-ov-file"
              className="  rounded-full p-3 "
            >
              <FaGithub style={{ width: "50px", height: "100%" }} />
            </a>
          </motion.div>
        </div>
        <div
          key="p2"
          className="relative flex justify-center items-center  text-icon  h-[300px]   rounded-xl"
        >
          <img
            className="w-[100%] h-[100%] rounded-xl hover:scale-95 focus:100 transition-transform"
            src="https://i.postimg.cc/hPz2yQTD/Home.jpg)](https://postimg.cc/XpWKXJsm"
          />
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute block flex justify-between  w-[30%] h-[30%]"
          >
            <a
              href="https://precious-and-charms.vercel.app/"
              className=" rounded-full p-3 "
            >
              <GrDeploy style={{ width: "50px", height: "100%" }} />
            </a>
            <a
              href="https://github.com/abii225/Precious-Charms?tab=readme-ov-file"
              className="  rounded-full p-3 "
            >
              <FaGithub style={{ width: "50px", height: "100%" }} />
            </a>
          </motion.div>
        </div>

        <div
          key="p3"
          className="relative flex justify-center items-center  text-icon  h-[300px]   rounded-xl"
        >
          <img
            className="w-[100%] h-[100%] rounded-xl hover:scale-95 focus:100 transition-transform"
            src="https://camo.githubusercontent.com/1ecb68d4031c103ead37e3f9114d1834bc1a8f31064c44aac723103f8d393840/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6b787078317a757773696734686c306967706b762e706e67"
          />
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute block flex justify-evenly  w-[30%] h-[30%]"
          >
            <a
              href="https://wood-heart.vercel.app/"
              className=" rounded-full  "
            >
              <GrDeploy style={{ width: "50px", height: "100%" }} />
            </a>
            <a
              href="https://github.com/abii225/Wood-Heart?tab=readme-ov-file"
              className="  rounded-full p-3 "
            >
              <FaGithub style={{ width: "50px", height: "100%" }} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
