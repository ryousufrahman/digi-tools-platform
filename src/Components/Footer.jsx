import React from 'react';
import digitool from '../assets/products/DigiToolswhite.png'
import instagram from '../assets/products/Instagram.png'
import facebook from '../assets/products/Facebook.png'
import twiter from '../assets/products/Twitter.png'

const Footer = () => {
    return (
        <>
          
<footer className="grid  gap-5 md:grid-cols-5  max-w-300 mx-auto  p-4 text-gray-400 mb-5">
  <aside className='space-y-4'>
      <img src={digitool} alt="" />
    <p>
     Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
    </p>
  </aside>
  <nav className='flex flex-col gap-2'>
    <h6 className="footer-title text-white">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex flex-col gap-2'>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex flex-col gap-2'>
    <h6 className="footer-title text-white">Resourses</h6>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Documentation</a>
    
  </nav>
  <nav className='flex flex-col gap-2'>
    <h6 className='footer-title text-white'>Social Links</h6>
    <div className='flex gap-4 '>
        <img src={instagram} alt="" className='w-[60px]' />
      <img src={facebook} alt="" className='w-[60px]' />
      <img src={twiter} alt=""  className='w-[60px]'/>
    </div>
  </nav>
</footer>
  <hr className='border bg-white text-gray-400 max-w-300 mx-auto' />

  <div className=' max-w-300 mx-auto text-gray-300 flex  justify-between mt-5 p-4'>
    <p>© 2026 Digitools. All rights reserved.</p>
  
    <ul className='flex flex-col sm:gap-5 sm:flex-row '>
        <li>Privacy Policy </li>
        <li> Terms of Service</li>
        <li>Cookies</li>
    </ul>
  </div>

</>
    );
};

export default Footer;