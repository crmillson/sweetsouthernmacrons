import React from 'react'

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Navbar = ({ isMenuOpen, toggleMenu }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <h2>Sweet Southern Macarons</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#featured">Featured</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 