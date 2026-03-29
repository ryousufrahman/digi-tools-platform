
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <> 
    <header className='shadow-sm sticky z-40 top-0 w-full' >
       <Navbar></Navbar>
    </header>
    <main>
      <Hero></Hero>
    </main>
    
      
    </>
  )
}

export default App
