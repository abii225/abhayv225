import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Tools = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div
        key="container"
        // style={{ border: "1px solid red" }}
        className="w-[80%]  mx-auto grid gap-12 grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 lg:gap-10 justify-center  items-center align-middle  "
      >
        <div key="vscode" className="">
          <img src="https://rohithanss.github.io/skills/vscode.png" alt="" />
        </div>
        <div key="github" className="">
          <img src="https://i.postimg.cc/rySQRJdd/github.png" alt="" />
        </div>
        <div key="postman" className="">
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Tools;
