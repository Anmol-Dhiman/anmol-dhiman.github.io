import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";

import { Links } from "../utils/Links";

const Navbar = () => {
  const sizeValue = 22;

  return (
    <nav className="flex justify-between items-center  mx-16 ">
      <a
        href="/resume.pdf"
        download="Anmol_Dhiman_Resume.pdf"
        className="flex flex-row nav"
      >
        <LuDownload size={sizeValue} className="mr-2" />
        <p> My Resume</p>
      </a>
      <div className="flex gap-6">
        <a href={Links.twitter_x} target="_blank" className="nav">
          <FaXTwitter size={sizeValue} />
        </a>
        <a href={Links.github} target="_blank" className="nav">
          <FaGithub size={sizeValue} />
        </a>
        <a href={Links.linkedin} target="_blank" className="nav">
          <FaLinkedin size={sizeValue} />
        </a>

        <a href={Links.mail} target="_blank" className="nav">
          <TbBrandGmail size={sizeValue} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
