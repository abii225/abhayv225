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
    <section id="about" className="h-[140vh] bg-slate-600 py-12" ref={ref}>
      <div key="container" className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key="image"
            className=" md:w-[300px] md:h-[300px]"
          >
            {/* image */}
            <img
              className=" sm:hidden md:block md:w-[100%] bg-contain bg-no-repeat  mix-blend-overlay bg-top"
              src="https://i.ibb.co/Byk01vZ/bliss-rar-100088829-473791836742084-7464846124536524567-n-1-removebg-preview-1-Copy-removebg-preview.png"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key="about"
            className="w-[100%] md:flex-1  text-white mt-[50px] h-[380px] md:w-[50%]"
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
            {inView && (
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div key="a">
                  <div
                    key="a1"
                    className="text-[40px] font-tertiary text-white mb-2"
                  >
                    {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                    k+
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
                    {inView ? (
                      <CountUp start={0} end={500} duration={3} />
                    ) : null}{" "}
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
                    {inView ? (
                      <CountUp start={0} end={100} duration={3} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px] text-white">
                    Assignments <br /> completed
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

<style jsx>{`
  @media (min-width: 768px) {
    .bg-about {
      // Your existing styles here
    }
  }
`}</style>;
