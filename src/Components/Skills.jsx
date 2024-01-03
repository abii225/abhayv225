import React from "react";
import { TiHtml5 } from "react-icons/ti";
import Frontend from "./Frontend";
import Tools from "./Tools";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Skills = () => {
  return (
    <div id="skills" className="section bg-slate-600 min-h-[100vh] py-3 mt-4">
      <div key="container" className="">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white text-2xl text-center py-8 underline md:text-3xl lg:text-3xl"
        >
          Tech Stacks
        </motion.h1>
        <Frontend />
        <h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white text-2xl text-center mt-10 py-8 underline md:text-3xl lg:text-3xl"
        >
          My ToolKit
        </h1>
        <Tools />
      </div>
    </div>
  );
};

export default Skills;
