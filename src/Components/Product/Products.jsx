import React, { useState } from 'react';
import Options from './Options';
import { toast } from 'react-toastify';


const Products = ({product ,addToCart , setAddToCart}) => {
   const [buy , setBuy] =useState(false)
   const handlebuy =()=>{
     setBuy(true);

      const exist = addToCart.find(p=> p.id === product.id)
      if(exist){
        toast.warn( 'This Product Already Exist in the Cart')
      }
      else{
        toast.success(`${product.name} Added to the Cart`)
         setAddToCart([...addToCart,product])
      }
     
     console.log(addToCart);
     
   }

     
    return (
       <>
         <div className='product space-y-4 p-6 shadow rounded-2xl flex flex-col relative'>
            <div className='flex-1'>
              <img src={product.icon} alt="" />
            </div>
            <div>
              <span className={`rounded-full px-3 py-1 ${product.tag=='Popular'? ' bg-purple-100 text-purple-500' : product.tag=='Best Seller' ? 'bg-amber-100 text-red-500' : 'bg-green-100 text-green-500' } absolute top-2 right-2`}>{product.tag}</span>
            </div>
            <div className='heading space-y-3'>
              <h3 className='font-bold text-2xl'>{product.name}</h3>
              <p className='text-[#627382]'>{product.description}</p>

            </div>
            <div className='price'>
              <h2 className='font-bold text-2xl'>${product.price}<span className='font-normal text-[16px] text-[#627382]'> /{product.period}</span></h2>

            </div>
            <div className='list'>
              {
                product.features.map((f, index)=> <Options key={index} f={f}></Options> )
              }

            </div>
             <div>
              <button className={`btn w-full rounded-full text-white ${buy? 'bg-green-500 ': 'bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)]' } `} onClick={handlebuy}>{buy? 'Added to Cart' : 'Buy Now'}</button>
             </div>


         </div>
       
       </>
    );
};

export default Products;