import { useState } from 'react'
import './App.css'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeaturedProducts from './components/FeaturedProducts'
import ProductGallery from './components/ProductGallery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <ProductGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
