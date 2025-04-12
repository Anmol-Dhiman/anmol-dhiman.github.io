import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Links } from "../utils/Links";

const Navbar = () => {
  const sizeValue = 24;
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-right">
        <div className="social-links">
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
        <div className="nav-actions">
          <a
            href="/resume.pdf"
            download="Anmol_Dhiman_Resume.pdf"
            className="nav download-resume"
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
          <button
            onClick={toggleTheme}
            className="nav theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <IoSunnyOutline size={sizeValue} />
            ) : (
              <IoMoonOutline size={sizeValue} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
