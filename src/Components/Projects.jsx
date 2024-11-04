import React from "react";
import image from "./img/image.png";

function Projects() {
  return (
    <div className="Projects">
      <div className="tracking-wide h-20 p-20  text-7xl text-center">
        Projects
      </div>
      <div>
        <div className="flex gap-10 justify-center p-20">
          <div className="rounded-3xl w-[10vw] h-[10vw] bg-zinc-800">
            <h1 className="text-center p-4 pt-7 text-5xl text-yellow-500">20</h1>
            <h1 className="text-center  font-light tracking-wider">
              Achievements
            </h1>
          </div>
          <div className="rounded-3xl w-[10vw] h-[10vw] bg-zinc-800">
            <h1 className="text-center p-4 pt-7 text-5xl text-yellow-500">2</h1>
            <h1 className="text-center font-light tracking-wider">
              Projects
            </h1>
          </div>
          <div className="rounded-3xl w-[10vw] h-[10vw] bg-zinc-800">
            <h1 className="text-center p-4 pt-7 text-5xl text-yellow-500">10</h1>
            <h1 className="text-center font-light tracking-wider">
              Certificate and Badges
            </h1>
          </div>
          <div className="rounded-3xl w-[10vw] h-[10vw] bg-zinc-800">
            <h1 className="text-center p-4 pt-7 text-5xl text-yellow-500">500</h1>
            <h1 className="text-center font-light tracking-wider">
              Cups of Coffee
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-4xl  pb-5 text-center">More Projects on Github</h1>
        </div>
        <a
          className="block text-center pb-20"
          href="https://github.com/vishalpr013"
        >
          <button className="text-2xl uppercase mt-5 pl-5 border-2 p-4 py-4 rounded-full font-semibold tracking-wide text-zinc-900 bg-yellow-300 border-black">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
