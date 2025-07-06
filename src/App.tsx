import { useState } from 'react'
import './App.css'

// Import components
import Navbar from './components/Navbar'
import Slideshow from './components/Slideshow'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Slideshow />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
