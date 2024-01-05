import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="fixed bottom-6 lg:bottom-12  w-full  overflow-hidden mix-blend-normal">
      <div className="container mx-auto ">
        <div className="w-full bg-slate-500 h-[60px] backdrop-blur-2xl rounded-full max-w-[500px] mx-auto px-5 flex justify-between align-middle text-2xl text-white">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiCodeAlt />
            {/* <BsBriefcase /> */}
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
