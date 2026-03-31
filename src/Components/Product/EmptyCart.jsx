import React from 'react';
import cart from '../../assets/products/shopping-cart-icon-r.png'

const EmptyCart = () => {
    return (
        <div className='shadow rounded-2xl p-5 max-w-300 mx-auto flex justify-center flex-row gap items-center mt-5 '>
            <div>
                <img src={cart} alt=""  className='w-[100px]'/>
                <p className='font-bold'>Your Cart is Empty</p>
            </div>
            
        </div>
    );
};

export default EmptyCart;