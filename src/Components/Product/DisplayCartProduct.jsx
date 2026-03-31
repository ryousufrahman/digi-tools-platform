import React from 'react';
import { toast } from 'react-toastify';

const DisplayCartProduct = ({added , addToCart , setAddToCart}) => {
    const handleDelete =(added)=>{

       const filteredCart = addToCart.filter(p=> p.id !== added.id )
       toast.warn(`${added.name} is Removed from the cart`)
       setAddToCart(filteredCart);
    }
    return (
       <>
         <div className='flex justify-between items-center shadow py-3 px-4 rounded-2xl bg-[#F9FAFC] mt-5'>
             <div className='flex gap-4 items-center '>

             <div>
                <img src={added.icon} alt="" />
             </div>
             <div>
                <h2 className='font-bold'>{added.name}</h2>
                <p className='text-[#627382]'> ${added.price}</p>
             </div>
            </div>
            <div>
                <button className='btn btn-ghost text-red-500 font-bold' onClick={()=>handleDelete(added)}>Remove</button>
            </div>
         </div>
        
           
       
       </>
    );
};

export default DisplayCartProduct;