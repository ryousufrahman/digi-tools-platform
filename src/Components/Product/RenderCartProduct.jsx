import React from 'react';
import DisplayCartProduct from './DisplayCartProduct';
import { toast } from 'react-toastify';

const RenderCartProduct = ({addToCart , setAddToCart}) => {

      const cartPrice = addToCart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleProceed =()=>{
    setAddToCart([])
    toast.success(' Purchase Successful')
  }

    return (
        <>
          <div className='main shadow rounded-2xl p-5'>
               <div className='products-selected mb-4 max-w-300 mx-auto  '>
            
             {
                addToCart.map((added , index) => <DisplayCartProduct key={index} added={added} setAddToCart={setAddToCart} addToCart ={addToCart}></DisplayCartProduct> )
             }
             
          </div>
          <div>
              <div className='flex justify-between mb-4 px-4'>
                 <h3>Total:</h3>
                 <h2 className='font-bold text-2xl'>$ {cartPrice}</h2>
              </div>
            <button className=' btn bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] rounded-full w-full text-white' onClick={handleProceed}>Proceed to Checkout</button>
          </div>

        </div>
        </>
    );
};

export default RenderCartProduct;