import React from "react";
import GitHubCalendar from "react-github-calendar";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const Github = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        key="container"
        className="text-white font-normal pt-[50px] w-[90%] mx-auto"
      >
        <div className="mt-[50px]  w-[80%] mx-auto flex flex-col justify-between md:flex-row gap-3">
          {" "}
          <img
            className="md:w-[30%]  block "
            key="stats"
            src="https://github-readme-stats.vercel.app/api?username=abii225&show_icons=true&locale=en"
            alt=""
          />
          <img
            key="streak-stats"
            className="md:w-[30%] block "
            src="https://github-readme-streak-stats.herokuapp.com?user=abii225&"
            alt=""
          />
          <img
            key="langs"
            className="md:w-[30%] block "
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=abii225&layout=donut"
            alt=""
          />
        </div>

        <div key="calendar" className="w-[80%] mx-auto mt-[50px] ">
          <GitHubCalendar
            colorScheme="light"
            style={{ margin: "auto" }}
            username="abii225"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Github;
