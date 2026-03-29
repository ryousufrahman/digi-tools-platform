import React from "react";
import Cart from '../assets/shoping-cart.png'
import logo from '../assets/DigiTools.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto  pt-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" className="w-[180px]" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-semibold hidden md:flex">

            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <img src={Cart} alt="" className="pr-4" />
           <a href="" className="mx-4 hidden md:block">Login</a>
          <a className="btn rounded-full  hidden md:flex ">Get Started</a>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
