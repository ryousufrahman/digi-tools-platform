import React from 'react';


const Started = () => {
    return (
        <>
         <div className='main-contianer'>

            <div className='space-y-4'>
                <h2 className='text-2xl text-center font-bold sm:text-4xl'>Get Started in 3 Steps</h2>
                <p className='text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='setps-box grid gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:mt-8'>
                <div className='box1'>
                    <div></div>
                    <div className='contents'>
                        <img src="" alt="" className='mx-auto' />
                        <h4 className='text-center'>Create Account</h4>
                        <p className='text-center'></p>

                    </div>

                </div>
                <div className='box2'>
                    <div></div>
                    <div className='contents'>
                        <img src="" alt="" className='mx-auto' />
                        <h4 className='text-center'>Choose Products</h4>
                        <p className='text-center'></p>

                    </div>

                </div>
                <div className='box3'>
                    <div></div>
                    <div className='contents'>
                        <img src="" alt="" className='mx-auto' />
                        <h4 className='text-center'>Start Creating</h4>
                        <p className='text-center'></p>

                    </div>

                </div>

            </div>

         </div>
        
        
        </>
    );
};

export default Started;