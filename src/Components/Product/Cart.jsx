import React from 'react';
import EmptyCart from './EmptyCart';
import RenderCartProduct from './RenderCartProduct';

const Cart = ({addToCart , setAddToCart ,setToggle}) => {
    return (
        <>
         <div className='main-container'>

               
         <div >
            <h3 className='text-2xl font-bold'>Your Cart</h3>

         </div>

         <div>
             {
               addToCart.length == 0 ? <EmptyCart setToggle={setToggle}></EmptyCart> : null
             }
         </div>
          <div className='mt-5'>
            {
                addToCart.length>0 ? <RenderCartProduct addToCart={addToCart} setAddToCart={setAddToCart}></RenderCartProduct> : null
            }
          </div>

         </div>
        </>
    );
};

export default Cart;