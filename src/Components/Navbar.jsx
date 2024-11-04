import React from "react";
import { Link } from "react-scroll";
import './app.css'
import Resume from "./Resume"


function Navbar() {

  return (
    <div className="bg-zinc-900 font-light sticky -top-2">
      <div className="relative w-full py-[2vw] pb-2 text-2xl flex justify-end">
        <h1 className="text-5xl flex items-center font-['Roboto_Black'] font-bold pr-[31.2vw] justify-start">Vishal</h1>
        <div className="ml-10 links flex gap-10 pr-[12vw] tracking-wide">
            <Link activeClass="active" to="LandingPage" spy={true} smooth={true} offset={-100} duration={800} className="nav">Home</Link>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={60} duration={800} className="navbar">About</Link>
            <Link activeClass="active" to="Resume" spy={true} smooth={true} offset={-20} duration={900} className="navbar">Resume</Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-30} duration={900} className="navbar">Projects</Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={100} duration={1000} className="navbar" >Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
