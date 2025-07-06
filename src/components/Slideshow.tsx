import { useState, useEffect } from 'react'
import bombPopImage from '../assets/bombPop.jpeg'
import hawaiiImage from '../assets/hawaii.jpeg'
import herbalImage from '../assets/herbal.jpeg'

interface Slide {
  id: number
  title: string
  description: string
  color: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Bomb Pop Delight",
    description: "A refreshing explosion of summer flavors with a cool, vibrant twist",
    color: "rose",
    image: bombPopImage
  },
  {
    id: 2,
    title: "Hawaiian Paradise",
    description: "Tropical island flavors that transport you to the Pacific shores",
    color: "peach",
    image: hawaiiImage
  },
  {
    id: 3,
    title: "Herbal Garden",
    description: "Fresh, aromatic herbs blended with delicate sweetness",
    color: "mint",
    image: herbalImage
  }
]

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  // Debug: Log slides data
  console.log('Slides data:', slides)
  console.log('Current slide:', currentSlide)

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length
        console.log('Auto-advancing from', prev, 'to', next)
        return next
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    console.log('Going to slide:', index)
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length
      console.log('Next slide from', prev, 'to', next)
      return next
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length
      console.log('Previous slide from', prev, 'to', next)
      return next
    })
  }

  const handleImageError = (imageName: string) => {
    console.error(`Failed to load image: ${imageName}`)
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const transformValue = `translateX(-${currentSlide * 33.333}%)`
  console.log('Transform value:', transformValue)

  return (
    <section className="slideshow-section">
      <div className="slideshow-container">
        <div className="slideshow-track" style={{ transform: transformValue }}>
          {slides.map((slide) => (
            <div key={slide.id} className={`slide slide-${slide.color}`}>
              <div className="slide-content">
                <div className="slide-image">
                  <div className="macaron-image-container">
                    {imageErrors[slide.image] ? (
                      <div className="macaron-placeholder">
                        <span className="macaron-emoji">🍪</span>
                        <p>Image not available</p>
                      </div>
                    ) : (
                      <img 
                        src={slide.image}
                        alt={slide.title}
                        className="macaron-image"
                        onError={() => handleImageError(slide.image)}
                        onLoad={() => console.log(`Successfully loaded: ${slide.title}`)}
                      />
                    )}
                  </div>
                </div>
                <div className="slide-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <a href="#products" className="btn btn-primary">Order Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button className="slide-nav prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="slide-nav next" onClick={nextSlide}>
          <span>›</span>
        </button>
        
        {/* Slide indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slideshow 