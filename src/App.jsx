
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProductButton from './Components/Product/ProductButton'
import Started from './Components/Started'
import Subscription from './Components/Subscription'
import Transform from './Components/Transform'
import UsersCount from './Components/UsersCount'
import { ToastContainer } from 'react-toastify'

const fetchProduct =async ()=>{
  const res = await fetch('/products.json')
  return res.json()
}
const fetchPromise = fetchProduct()
console.log(fetchPromise);


function App() {
  const [toggle , setToggle] =useState('products');
   const [addToCart , setAddToCart]=useState([])
  
  

  return (
    <> 
    <header className='shadow-sm sticky z-40 top-0 w-full bg-base-100' >
       <Navbar addToCart={addToCart} setToggle={setToggle}></Navbar>
    </header>
    <main>
      <Hero></Hero>
      <section className='bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)] mt-15  py-5 md:py-15'>
        <UsersCount></UsersCount>
      </section>
      <section className='product-button-section mt-5 lg:mt-20'>
        <Suspense>

          <ProductButton toggle ={toggle} setToggle={setToggle} fetchPromise={fetchPromise} addToCart={addToCart} setAddToCart={setAddToCart} ></ProductButton>
        </Suspense>
      
      </section>
      <section className='getStarted-section mt-5 bg-[#F9FAFC] py-8 md:mt-15 lg:py-15 '>
      <Started></Started>
      </section>
      <section>
        <Subscription></Subscription>
      </section>
      <section className='bg-[linear-gradient(90deg,#4F39F6_0%,#891AF9_83%,#9514FA_100%)]   py-5 md:py-15'>
        <Transform></Transform>

      </section>
    </main>
    <footer className='bg-[#101727] py-15 '>
       <Footer></Footer>


    </footer>
    
      <ToastContainer />
    </>
  )
}

export default App
