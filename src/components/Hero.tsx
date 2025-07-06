const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            Artisanal Macarons
            <span className="gradient-text"> Made with Love</span>
          </h1>
          <p className="hero-subtitle fade-in-up">
            Discover our handcrafted French macarons in delightful flavors, 
            perfect for any occasion. Each bite is a moment of pure joy.
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#products" className="btn btn-primary">Explore Flavors</a>
            <a href="#contact" className="btn btn-secondary">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 