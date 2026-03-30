import React from 'react';

const Transform = () => {
    return (
        <>
           <div className='main-container max-w-300 mx-auto text-center p-4 space-y-5 py-8 md:py-15 '>
            <h2 className='text-2xl font-bold text-white sm:text-4xl'>Ready to Transform Your Workflow?</h2>
            <p className='text-white mt-4'>Join thousands of professionals who are already using Digitools to work smarter. <br />  Start your free trial today.</p>

             <div className=''>
                <button className='btn rounded-full text-purple-500 '>Explore Products</button>
               <button className='btn btn-ghost rounded-full  border-2 border-white text-white ml-4'>View Pricing</button>
             </div>
             <div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                
             </div>

           </div>
        
        </>
    );
};

export default Transform;