import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { Links } from "../utils/Links";

const Navbar = () => {
  const sizeValue = 24;

  return (
    <nav className="nav-bar">
      <a
        href="/resume.pdf"
        download="Anmol_Dhiman_Resume.pdf"
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <LuDownload size={sizeValue} style={{ marginRight: "8px" }} />
        My Resume
      </a>
      <div className="flex gap-6">
        <a
          href={Links.twitter_x}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          <FaXTwitter size={sizeValue} />
        </a>
        <a
          href={Links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          <FaGithub size={sizeValue} />
        </a>
        <a
          href={Links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          <FaLinkedin size={sizeValue} />
        </a>
        <a
          href={Links.mail}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          <TbBrandGmail size={sizeValue} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
