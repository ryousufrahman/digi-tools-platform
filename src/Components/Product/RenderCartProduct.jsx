import React from 'react';
import DisplayCartProduct from './DisplayCartProduct';

const RenderCartProduct = ({addToCart , setAddToCart}) => {
    return (
        <>
          <div className='products-selected shadow rounded-2xl p-5 max-w-300 mx-auto '>
            
             {
                addToCart.map((added , index) => <DisplayCartProduct key={index} added={added} setAddToCart={setAddToCart}></DisplayCartProduct> )
             }
             
          </div>
          <div>
            
          </div>
        </>
    );
};

export default RenderCartProduct;