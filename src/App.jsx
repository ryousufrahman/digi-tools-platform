
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProductButton from './Components/Product/ProductButton'
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
    </main>
    
      
    </>
  )
}

export default App
