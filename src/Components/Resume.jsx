import React from "react";

function Resume() {
  return (
    <div className="Resume">
      <div className="h-20 p-20 mb-5 text-7xl text-yellow-300 text-center tracking-tight">
        Resume
      </div>
      <div>
        <h1 className="w-full text-center tracking-wider font-light">
          A Second Year AIML enthusiast persuing AIML at LD College of
          Engineering.
        </h1>
        <h1 className="w-full mb-10 text-center tracking-wider font-light">
          Having great knowledge of DSA , Python and Very interested in
          Artificial Intelligence
        </h1>
      </div>
      <div className="text-4xl text-center tracking-widest">
        Experience
        <h1 className="ml-20 mt-5 mb-20 w-[89vw] h-0.5 bg-yellow-500"></h1>
      </div>
      <div className="text-4xl text-center tracking-widest">
        Education
        <h1 className="ml-20 mt-5 w-[89vw] h-0.5 bg-yellow-500"></h1>
      </div>
      <div className="flex">
        <div className="mt-10 mb-20 m-auto rounded-3xl text-center w-[40%] h-[15vw] bg-zinc-700">
          <div>
            <h1 className="mt-5 text-3xl font-bold text-yellow-300">
              2021-2023
            </h1>
            <h2 className="m-6 text-left text-3xl">Higher Secondary School</h2>
            <h3 className="text-left text-2xl ml-6 tracking-wide font-bold text-zinc-900">
              Divine Buds School
            </h3>
            <h1 className="text-left ml-6 text-zinc-900 font-bold tracking-widest">
              Percentile :- 92.81
            </h1>
          </div>
        </div>
        <div className="mt-10 mb-20 m-auto rounded-3xl text-center w-[40%] h-[15vw] bg-zinc-700">
          <div>
            <h1 className="mt-5 text-3xl font-bold text-yellow-300">
              2023-2027
            </h1>
            <h2 className="m-6 text-left text-3xl">Bachelors of Engineering</h2>
            <h3 className="text-left text-2xl ml-10 tracking-wide font-bold text-zinc-900">
              L.D. College of Engineering
            </h3>
            <h1 className="text-left ml-10 text-zinc-900 font-bold tracking-widest">
              CGPA:- 8.85
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
