import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="" ref={ref}>
      <div key="container" className="container mx-auto">
        <div
          className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
          lg:gap-y-0 h-screen
          "
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key="image"
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-overlay bg-top"
          >
            {/* image */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key="about"
            className="flex-1 text-white h-[380px]"
          >
            <h2 className="h2">About me.</h2>
            <h3 className="h3 mb-6 text-wrap leading-0">
              I'm an aspiring Full Stack Web Developer
            </h3>
            <p>
              with a strong foundation in building solo and collaborative
              projects . Adept at crafting innovative web solutions, blending
              technical expertise with teamwork and problem-solving skills.
              Ready to drive web development excellence.
            </p>
            <br />
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div key="a">
                <div
                  key="a1"
                  className="text-[40px] font-tertiary text-white mb-2"
                >
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}k+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  Hours of Coding
                </div>
              </div>
              <div key="b">
                <div
                  key="b1"
                  className="text-[40px] font-tertiary text-white mb-2"
                >
                  {inView ? <CountUp start={0} end={500} duration={3} /> : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  DSA problem <br />
                  solved (masai)
                </div>
              </div>
              <div key="c">
                <div
                  key="c1"
                  className="text-[40px] font-tertiary text-white mb-2"
                >
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  Assignments <br /> completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
