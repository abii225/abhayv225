import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <div id="contact" className="mt-[150px]">
      <div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        key="form-container"
        className=" w-[80%]  mx-auto pt-[130px] rounded-md"
      >
        <div className="w-[90%] mx-auto text-white">
          <h1 className="text-[25px] md:h2 tracking-wide w-[90%]">
            Lets get in touch
          </h1>
          <p className="text-[25px]">
            Feel free to contact me to know more about me. You can call me or
            send mail to me I will surely reacch out to you in nearest time.
          </p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <BiLogoGmail />
                </td>{" "}
                <td>abhayv225@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <FaMapLocationDot />
                </td>{" "}
                <td>Kozhikode , Kerala (India)</td>
              </tr>
              <tr>
                <td>
                  <MdOutlinePhoneAndroid />
                </td>{" "}
                <td>(+91) 7994059967</td>
              </tr>
              <tr>
                <td>
                  <FaGithub />
                </td>{" "}
                <td>Github</td>
              </tr>
              <tr>
                <td>
                  <IoLogoLinkedin />
                </td>{" "}
                <td>LinkedIn</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <h3 className="h2 text-center text-white underline">Mail Me</h3>
        <div
          key="input-container"
          className=" md:grid md:grid-cols-2 md:justify-evenly  text-white  md:gap-6"
        >
          {" "}
          <input
            className=" block w-[90%] h-[50px] mx-auto text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="User name"
            type="text"
          />
          <input
            className=" block  w-[90%] mx-auto h-[50px] text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="E-mail"
            type="text"
          />
          <input
            className=" block w-[90%] mx-auto h-[50px] text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="Contact number"
            type="text"
          />
          <input
            className=" block  w-[90%] h-[50px] mx-auto text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="Subject"
            type="text"
          />
        </div>
        <div key="text-area" className="mt-[20px]  w-[90%]  mx-auto pb-4">
          <textarea
            name=""
            placeholder="Type your message here"
            className="resize-none block w-[100%] text-[24px] mx-auto rounded-md"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-lg block mx-auto text-white">Send</button>
      </div>
    </div>
  );
};

export default Contact;
