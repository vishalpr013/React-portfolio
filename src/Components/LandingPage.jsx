import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="LandingPage flex">
        <div className="p-28 w-1/2">
          <div className="text-4xl pl-2 pb-2">Hello,</div>
          <div className="text-8xl pl-1">
            I'm <span className="text-yellow-300 font-extrabold">Vishal</span>
            <span className="block text-yellow-300 font-extrabold">
              Prajapati
            </span>
          </div>
          <div className="pt-8 pl-2 text-3xl font-light">
            AI/ML Student at LDCE
          </div>
          <a href="https://github.com/vishalpr013">
            <button className="uppercase mt-5 pl-4 border-2 p-3 py-1 rounded-full font-semibold tracking-wider text-zinc-900 bg-white border-white">
              My Works
            </button>
          </a>
        </div>
        <div className="w-[38vw] px-8 py-5 ">
          <img
            className="rounded-3xl"
            src="https://img.freepik.com/premium-photo/ai-generated-software-engineer-software-developer-coding-nice-startup-office-images_1022157-9183.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
