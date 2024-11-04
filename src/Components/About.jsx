import React from "react";

function About() {
  return (
    <div className="About">
      <div className="p-36 text-yellow-300 w-[90vw] text-7xl mx-auto text-center pb-[2vw]">
        About Me
      </div>
      <div className="flex">
        <div className="block">
          <div className="">
            <div className="flex mt-10">
              <img
                className="w-[8vw] h-[10vw] ml-32"
                src="https://png.pngtree.com/thumb_back/fh260/background/20240914/pngtree-hacker-in-a-dark-hoodie-sitting-at-table-with-laptop-computer-image_16202963.jpg"
                alt=""
              />
              <div className="ml-10 mb-10 ">
                <div className="tracking-normal font-extralight text-2xl">
                  <span className="font-bold text-2xl">Name : </span>Vishal
                  Prajapati
                </div>
                <div className="tracking-normal font-extralight text-2xl">
                  <span className="text-2xl font-bold">Job role : </span>2nd
                  Year Student
                </div>
                <div className="tracking-normal font-extralight text-2xl">
                  <span className="text-2xl font-bold">Experience : </span>No
                  Experience
                </div>
                <div className="tracking-normal font-extralight text-2xl">
                  <span className="text-2xl font-bold">Address : </span>
                  Ahmedabad,Gujarat
                </div>
              </div>
            </div>
            <div className="font-light ml-20 text-2xl w-[50vw] p-10 pb-2">
              Hey! I'm Vishal, currently pursuing BTech in AI/ML Branch at LD
              College Of Engineering. I'm passionate about exploring the latest
              technologies and their applications in solving real-world
              problems.
              {/* <div className="font-light ml-20 text-2xl w-[50vw] pl-10 pb-10 ">
              I have a solid foundation in programming and a keen interest in
              understanding the fundamentals of AI and ML. My goal is to build
              my skills through coursework, hands-on projects, and collaboration
              with peers. I'm particularly interested in topics like data
              analysis and algorithm design.
            </div> */}
            </div>
            <div className="flex">
              <div className="mt-3">
                <div className="ml-32">
                  <div>C Language : 80%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.8}
                  />
                </div>
                <div className="ml-32">
                  <div>C++ Language : 50%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.5}
                  />
                </div>
                <div className="ml-32">
                  <div>Python : 60%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.6}
                  />
                </div>
                <div className="ml-32">
                  <div>DSA : 40%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.4}
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="ml-32">
                  <div>HTML : 60%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.6}
                  />
                </div>
                <div className="ml-32">
                  <div>CSS : 50%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.5}
                  />
                </div>
                <div className="ml-32">
                  <div>Javascript : 30%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.3}
                  />
                </div>
                <div className="ml-32">
                  <div>Problem Solving : 60%</div>
                  <progress
                    className="w-[15vw] h-[1.5vw] border-2 "
                    value={0.6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="ml-10 mt-10 mb-20">
            <div className="tracking-normal font-extralight text-2xl">
              <span className="font-bold text-2xl">Profile : </span>Artificial
              Intelligence & Machine Learning
            </div>
            <div className="tracking-normal font-extralight text-2xl">
              <span className="text-2xl font-bold">Domain : </span>None
            </div>
            <div className="tracking-normal font-extralight text-2xl">
              <span className="text-2xl font-bold">Education : </span>Bachelors
              of Engineering
            </div>
            <div className="tracking-normal font-extralight text-2xl">
              <span className="text-2xl font-bold">Language : </span>
              English,Gujarati,Hindi
            </div>
          </div>
          <div className="font-light text-2xl w-[40vw] pl-10 pb-10">
            I am a skilled developer with expertise in C, C++, and Python. I
            have a strong background in frontend development, particularly with
            React.js. This diverse skill set allows me to tackle various
            programming challenges, whether it's working on system-level
            applications or creating engaging web interfaces.
          </div>
          <a className="p-10" href="https://github.com/vishalpr013">
            <button className="uppercase border-2 p-3 py-1 rounded-full font-semibold tracking-wider text-zinc-900 bg-white ">
              Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
