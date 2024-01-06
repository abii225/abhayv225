import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const sendMail = (data) => {
    console.log(data);
    const form = {
      from_name: data.name,
      subject: data.subject,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    emailjs
      .send("service_f8k398h", "template_0z259h4", form, "croYj23M8vzKAKlqe")
      .then(
        function (response) {
          setData((prev) => {
            return {
              name: "",
              email: "",
              number: "",
              subject: "",
              message: "",
            };
          });
          console.log("SUCCESS!", response.status, response.text);
          // Swal.fire({
          //   icon: "success",
          //   showConfirmButton: false,
          //   timer: 1500,
          //   customClass: {
          //     popup: "custom-popup-class",
          //     icon: "custom-icon-class",
          //   },
          // });
        },
        function (error) {
          // Swal.fire({
          //   icon: "error",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div id="contact" className="bg-body mt-[150px] pt-[50px]">
      <div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        key="form-container"
        className=" w-[80%]  mx-auto pt-[130px] rounded-md"
      >
        <div className="w-[90%] mx-auto text-white">
          <h1 className="text-[25px] md:h2 tracking-wide w-[90%] underline">
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
            value={data.name}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
          <input
            className=" block  w-[90%] mx-auto h-[50px] text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="E-mail"
            type="text"
            value={data.email}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <input
            className=" block w-[90%] mx-auto h-[50px] text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="Contact number"
            type="text"
            value={data.number}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, number: e.target.value };
              })
            }
          />
          <input
            className=" block  w-[90%] h-[50px] mx-auto text-[24px] rounded-md bg-transparent outline-1 border mt-[10px] md:mt-0"
            placeholder="Subject"
            type="text"
            value={data.subject}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, subject: e.target.value };
              })
            }
          />
        </div>
        <div key="text-area" className="mt-[20px]  w-[90%]  mx-auto pb-4">
          <textarea
            name=""
            value={data.message}
            placeholder="Type your message here"
            className="resize-none block w-[100%] text-[24px] mx-auto rounded-md"
            id=""
            cols="30"
            rows="10"
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, message: e.target.value };
              })
            }
          ></textarea>
        </div>
        <button
          className="btn btn-lg block mx-auto text-white"
          onClick={(e) => sendMail(data)}
        >
          Send
        </button>
        {/* <div
          class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Success alert!</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
