import React from "react";
import Cart from '../assets/shoping-cart.png'
import logo from '../assets/DigiTools.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-300 mx-auto mt-2">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" className="w-[180px]" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-semibold">

            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <img src={Cart} alt="" className="" />
           <a href="" className="mx-4">Login</a>
          <a className="btn rounded-full">Get Started</a>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
