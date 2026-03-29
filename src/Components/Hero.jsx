import React from "react";
import heroImg from "../assets/banner.png";
import circle from "../assets/circle.png";

const Hero = () => {
  return (
    <>
      <div className="main-container max-w-300 mx-auto flex items-center flex-col p-3 sm:justify-between sm:flex-row">
        <div className="left-contianer ">
          <span className="flex items-center gap-1 px-4 py-3 bg-[#E1E7FF] rounded-full w-fit">
            <img src={circle} alt="" />
            <span className="text-[#9514FA]">
              New: AI-Powered Tools Available
            </span>
          </span>
          <h1 className="text-4xl text-[#101727] font-bold md:text-7xl ">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p>
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          <div className="hero-button">
            <button className="btn btn-accent">Explore Products</button>
            <button className="btn btn-outline">Watch Demo</button>

          </div>
        </div>
        <div className="right-contianer">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
