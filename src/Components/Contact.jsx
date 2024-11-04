import React from "react";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import insta from "./img/insta.png";

function Contact() {
  return (
    <div className="Contact pb-10">
      <div className=" uppercase text-6xl pb-10 pr-28 text-center p-20">
        Contact Me
      </div>
      <div className="flex gap-20 justify-center">
        <a href="https://github.com/">
          <img
            className="w-14 block h-14 ml-2 rounded-full "
            src={github}
            alt=""
          />
          <h1 className="text-2xl mt-1 mr-2 font-light">Github</h1>
        </a>
        <a href="https://www.linkedin.com/in/vishal-prajapati-931611333/">
          <img className="w-14 h-14 ml-4 rounded-none" src={linkedin} alt="" />
          <h1 className="text-2xl mt-1 mr-2 font-light">Linkedin</h1>
        </a>
        <a href="https://www.instagram.com/_vishal_prajapati_0/">
          <img className="w-14 h-14 ml-6 rounded-none " src={insta} alt="" />
          <h1 className="text-2xl mt-1 mr-2 font-light">Instagram</h1>
        </a>
      </div>
      <h1 className="text-center pt-16 font-bold text-s">Copyright &copy;2024 All rights reserved</h1>
    </div>
  );
}

export default Contact;
