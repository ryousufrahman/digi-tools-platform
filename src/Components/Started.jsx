import React from 'react';
import User from '../assets/user.png'
import pack from '../assets/package.png'
import rocket from '../assets/rocket.png'


const Started = () => {
    return (
        <>
         <div className='main-contianer max-w-300 mx-auto'>

            <div className='space-y-4'>
                <h2 className='text-2xl text-center font-bold sm:text-4xl'>Get Started in 3 Steps</h2>
                <p className='text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='setps-box p-3 grid gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:mt-8 '>
                <div className='box1 bg-white shadow px-6 py-15 relative rounded-2xl'>
                    <span className='bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white  rounded-4xl p-2 absolute top-3 right-3 px-4 font-bold'>01</span>
                    <div className='contents space-y-4 '>
                        
                     <img src={User} alt="" className='mx-auto bg-purple-100 rounded-full p-4' />
                      
                        <h4 className='text-center  font-bold text-2xl'>Create Account</h4>
                        <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>

                </div>
                <div className='box2 bg-white shadow px-6 py-15 relative rounded-2xl'>
                    <span className='bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white  rounded-4xl p-2 absolute top-3 right-3 px-4 font-bold'>02</span>
                    <div className='contents space-y-4'>
                        <img src={pack} alt="" className='mx-auto bg-purple-100 rounded-full p-4' />
                        <h4 className=' text-center font-bold text-2xl'>Choose Products</h4>
                        <p className='text-center text-[#627382]'>Browse our catalog and select the tools <br />that fit your needs.</p>

                    </div>

                </div>
                <div className='box3 bg-white shadow px-6  py-15 relative rounded-2xl'>
                   <span className='bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white  rounded-4xl p-2 absolute top-3 right-3 px-4 font-bold'>03</span>
                    <div className='contents space-y-4'>
                        <img src={rocket} alt="" className='mx-auto bg-purple-100 rounded-full p-5 ' />
                        <h4 className='text-center font-bold text-2xl'>Start Creating</h4>
                        <p className='text-center text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>

                    </div>

                </div>

            </div>

         </div>
        
        
        </>
    );
};

export default Started;