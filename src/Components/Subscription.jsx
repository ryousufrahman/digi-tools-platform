import { Check } from "lucide-react";
import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="main-container  space-y-4 py-8 p-3 max-w-300 mx-auto  md:py-15">
        <div className="hader text-center space-y-4 ">
          <h2 className="font-bold text-4xl">Simple, Transparent Pricing</h2>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="all-subscription grid gap-5 mt-5 sm:mt-12 sm:grid-cols-3">
          <div className="box1 bg-[#62738200] py-6 px-6 rounded-2xl shadow space-y-4 flex flex-col">
            <div className="header space-y-4 flex-1">
              <h4 className="font-bold text-2xl">Starter</h4>
              <p className="text-[#627382]">Perfect for getting started</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                $0
                <span className="text-2xl font-normal text-[#627382]">
                  /month
                </span>
              </h2>
            </div>
            <div>
              <ul>
                <li className="flex gap-1 items-center text-[#627382]">
                  {" "}
                  <Check className="text-green-500"></Check>Access to 10 free
                  tools
                </li>
                <li className="flex gap-1 items-center text-[#627382]">
                  {" "}
                  <Check className="text-green-500"></Check>Basic templates
                </li>
                <li className="flex gap-1 items-center text-[#627382]">
                  {" "}
                  <Check className="text-green-500"></Check>support
                </li>
                <li className="flex gap-1 items-center text-[#627382]">
                  {" "}
                  <Check className="text-green-500"></Check>Community support
                </li>
                <li className="flex gap-1 items-center text-[#627382]">
                  {" "}
                  <Check className="text-green-500"></Check>1 project per month
                </li>
              </ul>
            </div>
            <div>
              <button className="btn w-full mt-5 rounded-full bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white ">
                Get Started Free
              </button>
            </div>
          </div>
              <div className="box2 bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white  py-6 px-6 rounded-2xl shadow space-y-4 relative">
                <span className="text-red-500 px-4 py-2 absolute -top-5 right-10  rounded-full bg-amber-200">Most Popular</span>
            <div className="header space-y-4 ">
              <h4 className="font-bold text-2xl">Enterprise</h4>
              <p className="text-white">For teams and businesses</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                $99
                <span className="text-2xl font-normal text-white">
                  /month
                </span>
              </h2>
            </div>
            <div>
              <ul>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>Everything in Pro
                </li>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>Team collaboration
                </li>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>Custom integrations
                </li>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>Dedicated support
                </li>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>SLA guarantee
                </li>
                <li className="flex gap-1 items-center text-white">
                  {" "}
                  <Check className="text-green-500"></Check>Custom branding
                </li>
              </ul>
            </div>
            <div>
              <button className="btn w-full mt-5  rounded-full bg-white text-purple-500 ">
                Contact Sales
              </button>
            </div>
          </div>
             <div className="box3 bg-[#62738200] py-6 px-6 rounded-2xl shadow space-y-4">
          <div className="header space-y-4">
            <h4 className="font-bold text-2xl">Enterprise</h4>
            <p className="text-[#627382]">For teams and businesses</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              $99
              <span className="text-2xl font-normal text-[#627382]">
                /month
              </span>
            </h2>
          </div>
          <div>
            <ul>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>Everything in Pro
              </li>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>Team collaboration
              </li>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>Custom integrations
              </li>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>Dedicated support
              </li>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>SLA guarantee
              </li>
              <li className="flex gap-1 items-center text-[#627382]">
                {" "}
                <Check className="text-green-500"></Check>Custom branding
              </li>
            </ul>
          </div>
          <div>
            <button className="btn w-full rounded-full bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white mt-5">
              Contact Sales
            </button>
          </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Subscription;
