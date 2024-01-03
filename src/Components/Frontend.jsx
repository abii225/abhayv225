import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Frontend = () => {
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
        className="w-[80%]   mx-auto grid gap-12 grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 lg:gap-10  items-center align-middle  "
      >
        <div key="html" className="">
          <img src="https://i.postimg.cc/fRbKFQ8X/Html.png" alt="" />
        </div>
        <div key="css3" className="">
          <img src="https://i.postimg.cc/VNpDnZBt/Css.png" alt="" />
        </div>
        <div key="js" className="">
          <img
            src="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg"
            alt=""
          />
        </div>
        <div key="react" className="">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
          />
        </div>
        <div key="redux" className="">
          <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="" />
        </div>
        <div key="ts" className="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            alt=""
          />
        </div>
        <div key="nodejs" className="">
          <img src="https://rohithanss.github.io/skills/nodejs.png" alt="" />
        </div>
        <div key="ejs" className="">
          <img src="https://rohithanss.github.io/skills/expressJs.png" alt="" />
        </div>
        <div key="mongoDB" className="">
          <img
            src="https://hanumat-sharan.github.io/static/media/mongodb-seeklogo.com.1aca075d5cce0819fea7ea0902d94ce4.svg"
            alt=""
          />
        </div>

        <div key="Chakra Ui" className="">
          <img
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            alt=""
          />
        </div>
        <div key="tailwind" className="">
          <img src="" alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default Frontend;
