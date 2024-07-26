import React from "react";
import Navbar from "../components/navbar";
import About from "@/components/About";
import Skills from "@/components/skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Exp from "@/components/exp";
export default function Home() {
  return (
    <div className="flex flex-col justify-around bg-white">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Exp />
      <Footer />
    </div>
  );
}
