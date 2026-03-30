import React from "react";
import heroImg from "../assets/banner.png";
import circle from "../assets/circle.png";

const Hero = () => {
  return (
    <>
      <div className="main-container max-w-300 mx-auto flex mt-6 items-center flex-col gap-3 p-3 md:justify-between md:flex-row md:mt-15">
        <div className="left-contianer space-y-4 ">
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
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          <div className="hero-button flex flex-col  gap-3 sm:flex-row">
            <button className="btn bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white rounded-full">Explore Products</button>
            <button className="btn bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white  rounded-full">Watch Demo</button>

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
