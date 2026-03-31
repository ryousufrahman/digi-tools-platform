import React, { use } from "react";
import Products from "./Products";
import Cart from "./Cart";

const ProductButton = ({toggle , setToggle , fetchPromise ,addToCart , setAddToCart }) => {
  const allProduct = use(fetchPromise);
  console.log(allProduct);
 
  
  return (
    <>
      <div className="main-container p-3 max-w-300 mx-auto space-y-4">
          <div className="contents space-y-4">
               <h2 className="text-center text-3xl font-bold sm:text-4xl text-black">
               Premium Digital Tools
              </h2>
              <p className="text-center text-[#627382]">
             Choose from our curated collection of premium digital products
               designed <br />
               to boost your productivity and creativity.
             </p>
          </div>
          <div className="flex justify-center  mt-6 ">
              <button className={`btn rounded-r-none rounded-l-full  ${toggle =='products' ? 'bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white' :'btn'}`} onClick={()=>setToggle('products')}>Products</button>
               <button  className={`btn  rounded-r-full rounded-l-none ${toggle =='cart' ? 'bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] text-white' :'btn'}`}  onClick={()=>setToggle('cart')}>Cart ({addToCart.length})</button>
            </div>


            <div className="all-products grid gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8 ">
              {
                toggle == 'products' ? allProduct.map(product => <Products key={product.id} product={product} addToCart={addToCart} setAddToCart ={setAddToCart}></Products>) : null
              } 

            </div>
            <div className="cart">
                {
                    toggle == 'cart' ? <Cart addToCart={addToCart} setAddToCart ={setAddToCart} setToggle={setToggle} ></Cart>:null
                }

            </div>
        </div>

      
    </>
  );
};

export default ProductButton;
