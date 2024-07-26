"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function About() {
  return (
    <div
      className="h-[400px] w-full bg-white relative flex flex-col items-center justify-center antialiased"
      id="about"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-500 text-center font-sans font-bold">
          Hi, I'm Rishith Minupala
        </h1>
        <p></p>
        <p className="text-neutral-600 max-w-[576px] mx-auto my-2 text-base text-center relative z-10 font-normal">
          Welcome to my portfolio! I'm a full-stack developer with a passion for
          innovation and creating impactful web applications. Enthusiastic about
          AI/ML and new technologies, I love learning and exploring new ways to
          solve problems. Check out my projects to see my work, and feel free to
          connect for collaboration or tech discussions!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
