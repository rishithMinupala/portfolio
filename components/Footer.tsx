import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center gap-x-4 p-3 " id="contact">
      {/* Your div content goes here */}

      <a
        href="https://x.com/RishithMinupala"
        className="text-2xl p-2 rounded-full border-2"
      >
        <FaTwitter />
      </a>

      <a
        href="https://github.com/rishithMinupala"
        className="text-2xl p-2 rounded-full border-2"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rishith-minupala/"
        className="text-2xl p-2 rounded-full border-2"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Footer;
