import React from 'react';
import cart from '../../assets/products/shopping-cart-icon-r.png'

const EmptyCart = ({setToggle}) => {
    return (
        <div className='shadow rounded-2xl p-5 max-w-300 mx-auto flex justify-center flex-row gap items-center mt-5 '>
            <div>
                <img src={cart} alt=""  className='w-[100px] mx-auto'/>
                <p className='font-bold text-center'>Your Cart is Empty</p>
                <button className='btn text-white mt-4 rounded-full bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] ' onClick={()=>{setToggle('products')}}>Explore Our Products</button>
            </div>
            
        </div>
    );
};

export default EmptyCart;