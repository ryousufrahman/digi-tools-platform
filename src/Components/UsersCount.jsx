import React from 'react';

const UsersCount = () => {
    return (
        <>
         <div className='main-container max-w-300 mx-auto flex gap-3 flex-col  md:flex-row md:justify-between px-10'>
            <div className='first'>
                <h3 className='text-white text-4xl font-bold'>50K+</h3>
                <p className='text-white'>Active Users</p>

               
            </div>
             <div class="divider lg:divider-horizontal"></div>
            <div className='second'>
                <h3 className='text-white text-4xl font-bold'>200+</h3>
                <p className='text-white'>Premium Tools</p>

            </div>
             <div class="divider lg:divider-horizontal"></div>
            <div className='third'>
                <h3 className='text-white text-4xl font-bold'>4.9</h3>
                <p className='text-white'>Rating</p>

            </div>
            

         </div>
        
        
        </>
    );
};

export default UsersCount;