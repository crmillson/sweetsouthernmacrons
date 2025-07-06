import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sweet Southern Macarons</h3>
            <p>Crafting the perfect macaron experience since 2024</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#featured">Featured</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sweet Southern Macarons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 