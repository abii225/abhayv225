import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";
// animate
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="min-h-[30vh] h-[100%] py-14">
      <div
        key="sub-container"
        className="w-[100%] bg-body container flex flex-col md:flex-row items-center justify-between  mx-auto"
      >
        {/* text */}
        <div className=" md:h-[250px]    mx-auto lg:w-[40%] w-[100%] ">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-blue-50 text-[36px] font-tertiary text-center leading-2"
          >
            ABHAY V
          </motion.h1>
          <br />
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            key="animate"
            className="mb-[30px] text-cyan-50 text-center  text-[12px]  lg:text-[15px] font-secondary font-semibold leading-1"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "  Frontend Developer",
                2000,
                "  Backend Developer",
                2000,
                "  MERN Developer",
                2000,
              ]}
              speed={50}
              wrapper="span"
              style={{
                fontSize: "2em",
              }}
              repeat={Infinity}
            />
          </motion.div>
          {/* ======================== */}
          <motion.div
            key="connect"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" flex w-[280px] flex-col md:flex-row justify-between  mx-auto items-center"
          >
            <Link to="contact" spy={true} smooth={true}>
              {" "}
              <button className="btn btn-sm md:btn-lg text-white mb-[10px] md:mb-0">
                Contact me
              </button>
            </Link>
            <div key="contact-links" className="w-[100px] flex justify-evenly">
              <a href="https://www.linkedin.com/in/abhay-v-935738243/">
                {" "}
                <FaLinkedin className="bg-white w-[30px] h-[30px] text-blue-700 rounded-md" />{" "}
              </a>
              <a href="https://github.com/abii225">
                {" "}
                <FaGithub className="bg-white w-[30px] h-[30px] rounded-md" />{" "}
              </a>
              <a href="mailto:abhayv225@gmail.com" spy={true} smooth={true}>
                {" "}
                <SiGmail className="bg-white w-[30px] h-[30px] text-red-600 rounded-md" />{" "}
              </a>
            </div>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          key="image"
          className=" mx-auto mt-[20px]"
        >
          <img
            className="lg:w-[400px]"
            src="https://i.ibb.co/tCfpzhn/profile.png"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
{
  /* <FaLinkedin />
      <FaGithub />
      <SiGmail /> */
}
