import React, { useState, useEffect } from 'react'
import ssmLogo from '../assets/SSM Logo.png'
import bombPop from '../assets/bombPop.jpeg'
import hawaii from '../assets/hawaii.jpeg'
import herbal from '../assets/herbal.jpeg'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    { src: bombPop, alt: 'Bomb Pop Macaron' },
    { src: hawaii, alt: 'Hawaii Macaron' },
    { src: herbal, alt: 'Herbal Macaron' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={ssmLogo} alt="SSM Logo" className="ssm-logo" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Artisanal Macarons
              <span className="hero-subtitle">Crafted with Love</span>
            </h1>
            <p className="hero-description">
              Discover our spin on French macarons with a hint of Southern Hospitality
              Each bite is a moment of pure delight, perfect for any occasion.
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-slideshow">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
                <div className="hero-slide-indicators">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 