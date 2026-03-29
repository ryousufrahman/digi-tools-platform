
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProductButton from './Components/Product/ProductButton'
import Started from './Components/Started'
import UsersCount from './Components/UsersCount'

function App() {
  

  return (
    <> 
    <header className='shadow-sm sticky z-40 top-0 w-full' >
       <Navbar></Navbar>
    </header>
    <main>
      <Hero></Hero>
      <section className='bg-amber-400 mt-15  py-5 md:py-15'>
        <UsersCount></UsersCount>
      </section>
      <section className='product-button-section mt-5 lg:mt-20'>
        <ProductButton></ProductButton>
      
      </section>
      <section className='getStarted-section mt-5 bg-[#F9FAFC] py-8 md:mt-15 lg:py-15'>
      <Started></Started>
      </section>
    </main>
    
      
    </>
  )
}

export default App
